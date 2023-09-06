'use client';
import { ConfirmModal } from '@components/modal/post/ConfirmModal';
import { SearchBookModal } from '@components/modal/post/SearchBookModal';
import { SelectTeamModal } from '@components/modal/post/SelectTeamModal';
import { BookInfoSection } from '@components/post/BookInfoSection';
import { ContentTextarea } from '@components/post/ContentTextarea';
import { TeamInfoButton } from '@components/post/TeamInfoButton';
import { TitleInput } from '@components/post/TitleInput';
import { Toast } from '@components/toast/Toast';
import { ToastContainer } from '@components/toast/ToastContainer';
import { useInitPostStore } from '@stores/usePostStore';
import { useToastStore } from '@stores/useToastStore';
import React, { useEffect } from 'react';

const Page = () => {
	const initPostStore = useInitPostStore();
	const { postCompleted } = useToastStore();

	useEffect(() => {
		initPostStore();
	}, []);

	return (
		<div className="rem:mx-[350px] rem:pt-[80px] rem:mb-[225px] flex flex-col">
			{/* 소속 팀 / 책 정보 입력 */}
			<div className="flex flex-col rem:gap-[30px]">
				<TeamInfoButton />
				<BookInfoSection />
			</div>
			{/* 제목/내용 입력 */}
			<div className="flex flex-col rem:gap-[50px] rem:mt-[90px]">
				<TitleInput />
				<ContentTextarea />
			</div>

			{/* modal */}
			<ConfirmModal />
			<SelectTeamModal />
			<SearchBookModal />

			{/* toast */}
			<ToastContainer isOpen={postCompleted}>
				<Toast text="소중한 독서 기록을 게시했어요. 오늘도 책을 피서!" />
			</ToastContainer>
		</div>
	);
};

export default Page;
