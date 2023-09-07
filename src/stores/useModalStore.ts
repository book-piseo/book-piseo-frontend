'use client';
import { create } from 'zustand';

type Type = 'teamMember' | 'postConfirm' | 'selectTeam' | 'searchBook';

/**
 * @teamMember 팀원 선택
 * @postConfirm 작성 확인
 * @selectTeam 작성 위치 선택
 * @searchBook 도서 검색
 */
export const ModalType = {
	teamMember: 'teamMember',
	postConfirm: 'postConfirm',
	selectTeam: 'selectTeam',
	searchBook: 'searchBook',
} as const;

type ModalState = {
	teamMember: boolean;
	postConfirm: boolean;
	selectTeam: boolean;
	searchBook: boolean;
	changeModalState: (type: Type) => void;
};

export const useModalStore = create<ModalState>((set) => ({
	teamMember: false,
	postConfirm: false,
	selectTeam: false,
	searchBook: false,
	changeModalState: (type: Type) => {
		set((state) => ({ ...state, [type]: !state[type] }));
	},
}));

export const useModalActions = () => useModalStore((state) => state.changeModalState);

export const useTeamMemberState = () => useModalStore((state) => state.teamMember);
export const usePostConfirmState = () => useModalStore((state) => state.postConfirm);
export const useSelectTeamState = () => useModalStore((state) => state.selectTeam);
export const useSearchBookState = () => useModalStore((state) => state.searchBook);
