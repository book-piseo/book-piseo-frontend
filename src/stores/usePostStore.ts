'use client';
import { Contents } from '@/types/Content';
import { create } from 'zustand';

export type PostStore = {
	setPostStore: (value: Record<string, unknown>) => void;
	initPostStore: () => void;
} & Contents;

const initPostStore = {
	contentsTitle: '',
	contentsText: '',
	bookInfo: {
		title: '',
		link: '',
		image: '',
		author: '',
		discount: '',
		publisher: '',
		pubdate: '',
		isbn: '',
		description: '',
	},
	teamId: '',
	teamName: '',
};
export const usePostStore = create<PostStore>((set) => ({
	...initPostStore,
	setPostStore: (value: Record<string, unknown>) => {
		set((state) => ({ ...state, ...value }));
	},
	initPostStore: () => {
		set(initPostStore);
	},
}));
export const useSetPostStore = () => usePostStore((state) => state.setPostStore);
export const useInitPostStore = () => usePostStore((state) => state.initPostStore);
