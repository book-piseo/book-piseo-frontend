'use client';
import { create } from 'zustand';

type Type = 'postCompleted';

/**
 * @post 작성 완료
 */
export const ToastType = {
	postCompleted: 'postCompleted',
} as const;

type ToastState = {
	postCompleted: boolean;
	setToastState: (type: Type) => void;
};

export const useToastStore = create<ToastState>((set) => ({
	postCompleted: false,
	setToastState: (type: Type) => {
		set((state) => ({ ...state, [type]: !state[type] }));
	},
}));

export const useToastActions = () => useToastStore((state) => state.setToastState);

export const usePostCompletedState = () => useToastStore((state) => state.postCompleted);
