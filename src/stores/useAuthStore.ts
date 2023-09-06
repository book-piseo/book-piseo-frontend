import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthState = {
	email: string;
	password: string;
	autoLogin: boolean;
	isLogin: boolean;
	token: string;
};

type AuthAction = {
	setEmail: (value: string) => void;
	setPassword: (value: string) => void;
	setAutoLogin: (value: boolean) => void;
	setIsLogin: (value: boolean) => void;
	setLoginToken: (token: string) => void;
	clearAuth: () => void;
};

const initialState = {
	email: '',
	password: '',
	autoLogin: false,
	isLogin: false,
	token: '',
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
				setLoginToken: (value: string) => {
					set({ token: value, isLogin: true });
				},
				clearAuth: () => set(initialState),
			}),
			{ name: 'LOGIN_AUTH_STORE' },
		),
	),
);
