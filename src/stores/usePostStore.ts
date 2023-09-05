'use client';
import { Contents } from '@/types/Content';
import { create } from 'zustand';

export type PostStore = { setPostStore: (value: Record<string, unknown>) => void } & Contents;

export const usePostStore = create<PostStore>((set) => ({
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
	setPostStore: (value: Record<string, unknown>) => {
		set((state) => ({ ...state, ...value }));
	},
}));
export const useSetPostStore = () => usePostStore((state) => state.setPostStore);
