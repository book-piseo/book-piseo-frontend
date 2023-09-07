'use client';
import { ConfirmModal } from '@components/modal/post/ConfirmModal';
import { SearchBookModal } from '@components/modal/post/SearchBookModal';
import { SelectTeamModal } from '@components/modal/post/SelectTeamModal';
import { BookInfoSection } from '@components/post/BookInfoSection';
import { ContentTextarea } from '@components/post/ContentTextarea';
import { TeamInfoButton } from '@components/post/TeamInfoButton';
import { TitleInput } from '@components/post/TitleInput';
import useStore from '@hooks/useStore';
import { useInitPostStore, useSetPostStore } from '@stores/usePostStore';

import { useUserInfoStore } from '@stores/useUserInfoStore';
import React, { useEffect } from 'react';

const Page = () => {
	const initPostStore = useInitPostStore();

	const setPostStore = useSetPostStore();
	const userStore = useStore(useUserInfoStore, (state) => state);

	useEffect(() => {
		if (!userStore?.userInfo?.affiliatedTeamInfos) {
			return;
		}
		setPostStore({
			teamName: userStore.userInfo.affiliatedTeamInfos[0].teamName,
			teamId: userStore.userInfo.affiliatedTeamInfos[0].teamId,
		});
	}, [userStore]);

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
		</div>
	);
};

export default Page;
