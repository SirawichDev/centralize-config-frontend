import { create } from "zustand";

export type TUser = {
	/** Id */
	id: number;
	/** Email */
	email: string;
	/** First Name */
	first_name?: string;
	/** Last Name */
	last_name?: string;
	/** Phone Number */
	phone_number?: string;
	/** Is Active */
	is_active: boolean;
};

type AuthStore = {
	//@ts-ignore
	user: TUser;
	setUser: (user: TUser) => void;
	isAuthenticated: boolean;
	setIsAuthenticated: (isAuthenticated: boolean) => void;
};

const authStore = create<AuthStore>()((set) => ({
	user: { id: 0, email: "test@test.com", is_active: true },
	setUser: (user: TUser) => set({ user }),
	isAuthenticated: false,
	setIsAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
}));

export default authStore;
