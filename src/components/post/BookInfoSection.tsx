'use client';

import { useModalStore, ModalType } from '@/stores/useModalStore';

export const BookInfoSection = () => {
	const { changeModalState } = useModalStore();

	return (
		<div
			className="rem:h-[129px] rem:pt-[50px] text-s1_semibold text-light-grey-2 rem:pl-[40px] bg-light-grey-1 rounded-[20px] cursor-pointer"
			onClick={() => {
				changeModalState(ModalType.searchBook);
			}}
		>
			+ 어떤 책을 읽었나요?
		</div>
	);
};
