'use client';
import Image from 'next/image';
import { IcArrowDown } from '../../../public/assets/icons';
import { ModalType, useModalActions } from '@stores/useModalStore';
import { usePostStore } from '@stores/usePostStore';

export const TeamInfoButton = () => {
	const state = usePostStore();
	const changeModalState = useModalActions();

	return (
		<div
			className="flex items-center w-fit rem:h-[58px] rem:px-[18px] rem:py-[20px] text-s3_semibold rounded-[10px] border border-light-grey-2 rem:gap-[40px] cursor-pointer"
			onClick={() => {
				changeModalState(ModalType.selectTeam);
			}}
		>
			<div className="flex items-center rem:gap-[10px] text-dark-grey-1 ">
				<span>{state.teamName}</span>
				<Image src={IcArrowDown} alt="IcArrowDown" />
			</div>
			<span className="text-dark-grey-2">에서 읽었어요</span>
		</div>
	);
};
