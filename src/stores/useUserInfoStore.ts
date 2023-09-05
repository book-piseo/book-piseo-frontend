import { UserSessionInfo } from '@models/user.model';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type UserInfoState = {
	userInfo?: UserSessionInfo | null;
};

type UserInfoAction = {
	setUserInfo: (userInfo: UserSessionInfo) => void;
	clearUserInfo: () => void;
};

const initialState = {
	userInfo: null,
};

export const useUserInfoStore = create<UserInfoState & UserInfoAction>()(
	devtools(
		persist(
			(set) => ({
				...initialState,
				setUserInfo: (userInfo: UserSessionInfo) => set({ userInfo }),
				clearUserInfo: () => set(initialState),
			}),
			{ name: 'USER_INFO_STORE' },
		),
	),
);
