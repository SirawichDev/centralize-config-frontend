import type { CSSProperties } from "react";

export type TButton = {
	primary?: boolean;
	backgroundColor: string;
	size?: "small" | "medium" | "large";
	label: string;
};
