import { sha256 } from "js-sha256";

function uint8_to_hex(uint8: Uint8Array): string {
	return Array.from(uint8)
		.map((i) => i.toString(16).padStart(2, "0"))
		.join("");
}

function hex_to_unit8(hex: string): Uint8Array {
	const bytes = new Uint8Array(hex.length / 2);
	for (let i = 0; i !== bytes.length; i++) {
		bytes[i] = Number.parseInt(hex.substring(i * 2, i * 2 + 2), 16);
	}
	return bytes;
}

export class AuthenticationEncyption {
	static generate_key(
		key: string,
		_hidden_key: Uint8Array | undefined = undefined,
	): [Uint8Array, Uint8Array] {
		if (_hidden_key === undefined) {
			const now: Date = new Date();
			const timestamp: number = Math.trunc(now.getTime() / 1000);
			const _hidden_key_array_buffer = new ArrayBuffer(8);
			const dataView = new DataView(_hidden_key_array_buffer);
			dataView.setBigUint64(0, BigInt(timestamp));
			_hidden_key = new Uint8Array(_hidden_key_array_buffer);
		}
		let encoded = new Uint8Array(sha256.arrayBuffer(key));
		const start_index: number = encoded.length - 8;
		for (let i = start_index; i < encoded.length; i++) {
			encoded[i] = _hidden_key[i - start_index];
		}
		return [encoded, _hidden_key];
	}

	static async encrypt(key: string, text: string): Promise<string> {
		const text_encoder = new TextEncoder();
		const [generated, _hidden_key] = AuthenticationEncyption.generate_key(key);
		const nonce = crypto.getRandomValues(new Uint8Array(16));
		const crypto_key = await crypto.subtle.importKey(
			"raw",
			generated,
			"AES-GCM",
			true,
			["encrypt", "decrypt"],
		);
		const encrypt_result = await crypto.subtle.encrypt(
			{
				name: "AES-GCM",
				iv: nonce,
			},
			crypto_key,
			text_encoder.encode(text),
		);
		const [encrypted, tag] = [
			new Uint8Array(encrypt_result.slice(0, encrypt_result.byteLength - 16)),
			new Uint8Array(encrypt_result.slice(encrypt_result.byteLength - 16)),
		];

		let encrypted_buffer = new Uint8Array([
			...nonce,
			..._hidden_key.slice(0, 4),
			...encrypted,
			..._hidden_key.slice(4, 8),
			...tag,
		]);
		let encrypted_hex = uint8_to_hex(encrypted_buffer);
		return encrypted_hex;
	}

	static async decrypt(
		key: string,
		encrypted_hex: string,
	): Promise<[boolean, string | undefined]> {
		const text_decoder = new TextDecoder();
		const raw_encrypted_buffer = hex_to_unit8(encrypted_hex);
		const is_valid =
			AuthenticationEncyption.check_valid_time(raw_encrypted_buffer);
		if (!is_valid) {
			return [false, undefined];
		}
		const nonce = raw_encrypted_buffer.slice(0, 16);
		const encrypted_buffer = raw_encrypted_buffer.slice(
			20,
			raw_encrypted_buffer.length - 20,
		);
		const tag_buffer = raw_encrypted_buffer.slice(
			raw_encrypted_buffer.length - 16,
			raw_encrypted_buffer.length,
		);
		const encrypted_packed_buffer = new Uint8Array([
			...encrypted_buffer,
			...tag_buffer,
		]);
		const _hidden_key_buff = new Uint8Array([
			...raw_encrypted_buffer.slice(16, 20),
			...raw_encrypted_buffer.slice(
				raw_encrypted_buffer.length - 20,
				raw_encrypted_buffer.length - 16,
			),
		]);
		const [generated, _hidden_key] = AuthenticationEncyption.generate_key(
			key,
			_hidden_key_buff,
		);
		const crypto_key = await crypto.subtle.importKey(
			"raw",
			generated,
			"AES-GCM",
			true,
			["encrypt", "decrypt"],
		);
		let text;
		let is_success = true;
		try {
			const decrpyt_result = await crypto.subtle.decrypt(
				{
					name: "AES-GCM",
					iv: nonce,
				},
				crypto_key,
				encrypted_packed_buffer,
			);
			text = text_decoder.decode(decrpyt_result);
		} catch (error) {
			is_success = false;
			console.log(error);
		}
		return [is_success, text];
	}

	static check_valid_time(raw_encrypted_buffer: Uint8Array): boolean {
		const _hidden_key_buff = new Uint8Array([
			...raw_encrypted_buffer.slice(16, 20),
			...raw_encrypted_buffer.slice(
				raw_encrypted_buffer.length - 20,
				raw_encrypted_buffer.length - 16,
			),
		]);
		const dataView = new DataView(_hidden_key_buff.buffer);
		const _hidden_key = dataView.getBigUint64(0);
		return BigInt(Math.trunc(Date.now() / 1000.0)) - _hidden_key < 300;
	}
}