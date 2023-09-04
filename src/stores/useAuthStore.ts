import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type AuthState = {
	id: string;
	pwd: string;
	autoLogin: boolean;
	isLogin: boolean;
};

type AuthAction = {
	setId: (id: string) => void;
	setPwd: (pwd: string) => void;
	setAutoLogin: (autoLogin: boolean) => void;
	setIsLogin: (isLogin: boolean) => void;
};

const initialState = {
	id: '',
	pwd: '',
	autoLogin: false,
	isLogin: false,
};

export const useAuthStore = create<AuthState & AuthAction>()(
	devtools(
		persist(
			(set) => ({
				...initialState,
				setId: (id: string) => set({ id }),
				setPwd: (pwd: string) => set({ pwd }),
				setAutoLogin: (autoLogin: boolean) => set({ autoLogin }),
				setIsLogin: (isLogin: boolean) => set({ isLogin }),
			}),
			{ name: 'auth-store' },
		),
	),
);
