import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthState = {
	email: string;
	password: string;
	autoLogin: boolean;
	isLogin: boolean;
};

type AuthAction = {
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	setAutoLogin: (value: boolean) => void;
	setIsLogin: (value: boolean) => void;
};

const initialState = {
	email: '',
	password: '',
	autoLogin: false,
	isLogin: false,
};

export const useAuthStore = create<AuthState & AuthAction>()(
	devtools(
		persist(
			(set) => ({
				...initialState,
				setEmail: (value: string) => set({ email: value }),
				setPassword: (value: string) => set({ password: value }),
				setAutoLogin: (value: boolean) => set({ autoLogin: value }),
				setIsLogin: (value: boolean) => set({ isLogin: value }),
			}),
			{ name: 'LOGIN_AUTH_STORE' },
		),
	),
);
