import { Contents } from '@models/Content';
import { create } from 'zustand';

type ContentState = { setContent: (value: Record<string, string>) => void } & Contents;

export const useContentStore = create<ContentState>((set) => ({
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
	setContent: (value: Record<string, string>) => {
		set((state) => ({ ...state, ...value }));
	},
}));

export const useContentAction = () => useContentStore((state) => state.setContent);