'use client';
import React, { useEffect, useState } from 'react';
import { ContentBookInfo } from '@components/content/ContentBookInfo';
import { ContentPath } from '@components/content/ContentPath';
import { Content } from '@components/content/Content';
import { useSearchParams } from 'next/navigation';
import { ContentsInfoResponse } from '@models/contents.model';
import { useAuthStore } from '@stores/useAuthStore';
import useStore from '@hooks/useStore';
import { getContent } from '@apis/contentApi';
import { Toast } from '@components/toast/Toast';
import { ToastContainer } from '@components/toast/ToastContainer';
import { useToastStore } from '@stores/useToastStore';

const Page = () => {
	const searchParams = useSearchParams();
	const paramId = searchParams === null ? '' : searchParams.get('id');
	const [content, setContent] = useState<Partial<ContentsInfoResponse>>({});

	const store = useStore(useAuthStore, (state) => state);
	const { postCompleted } = useToastStore();

	const fetchContentData = async (paramId: string | null) => {
		const getContentData = await getContent({ contentId: paramId === null ? '' : paramId });
		setContent(getContentData);
	};

	useEffect(() => {
		fetchContentData(paramId);
	}, [store?.isLogin, paramId]);

	return (
		<div className="rem:pt-[100px] rem:mb-[132px] rem:px-[350px]">
			{/* 경로 */}
			<ContentPath teamName={content.teamName ?? ''} teamId={content.teamId ?? ''} />
			{/* 책 정보 */}
			<ContentBookInfo content={content} />
			{/* 포스팅 내용 */}
			<Content contentsText={content.contentsText || ''} />
			{/* toast */}
			<ToastContainer isOpen={postCompleted}>
				<Toast text="소중한 독서 기록을 게시했어요. 오늘도 책을 피서!" />
			</ToastContainer>
		</div>
	);
};
export default Page;
