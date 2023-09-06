'use client';
import { Contents } from '@/types/Content';
import { create } from 'zustand';

type PostState = { setPostState: (value: Record<string, unknown>) => void } & Contents;

export const usePostStore = create<PostState>((set) => ({
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
	setPostState: (value: Record<string, unknown>) => {
		set((state) => ({ ...state, ...value }));
	},
}));

export const useSetPostStore = () => usePostStore((state) => state.setPostState);
