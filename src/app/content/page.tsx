'use client';
import React from 'react';
import { ContentBookInfo } from '@components/content/ContentBookInfo';
import { ContentPath } from '@components/content/ContentPath';
import { Content } from '@components/content/Content';
import { useSearchParams } from 'next/navigation';

const Page = () => {
	const searchParams = useSearchParams();
	const paramId = searchParams === null ? '' : searchParams.get('id');

	return (
		<div className="rem:pt-[100px] rem:mb-[132px] rem:px-[350px] h-full">
			{/* 경로 */}
			<ContentPath />
			{/* 책 정보 */}
			<ContentBookInfo />
			{/* 포스팅 내용 */}
			<Content />
		</div>
	);
};
export default Page;
