'use client';
import React, { useEffect, useState } from 'react';
import { ContentBookInfo } from '@components/content/ContentBookInfo';
import { ContentPath } from '@components/content/ContentPath';
import { Content } from '@components/content/Content';
import { useSearchParams } from 'next/navigation';
import { ContentsInfoResponse } from '@models/contents.model';

const Page = () => {
	const dummy = {
		contentsId: 'string',
		contentsTitle: '우리가 빛의 속도로 갈 수 없다면을 읽고',
		contentsText:
			'김초엽 첫 장편소설, 모두가 간절히 기다려온 이야기 이미 폭넓은 독자층을 형성하며 열렬한 사랑을 받고 있는 김초엽 작가는 더스트로 멸망한 이후의 세계를 첫 장편소설의 무대로 삼았다. 그는 지난해 말 플랫폼 연재를 통해 발표한 이야기를 반년이 훌쩍 넘는 시간 동안 수정하면서 한층 더 무르익도록 만들었다. 그리하여 장 구성부터 세부적인 장면은 물론 문장들까지 완전히 새롭게 탄생한 『지구 끝의 온실』이 2021년 8월 드디어 독자들을 만난다. 『지구 끝의 온실』은 자이언트북스의 네 번째 도서이다. 김중혁의 첫 시리즈 소설 『내일은 초인간』, 배명훈 장편소설 『빙글빙글 우주군』, 그리고 한국문학의 빛나는 일곱 명의 작가가 ‘즐거움’을 키워드로 쓴 단편소설을 묶은 앤솔로지 『놀이터는 24시』까지, 작가들의 자유로운 상상력을 응원하며 가장 그다운 작품을 선보일 수 있도록 해온 자이언트북스는 이번 주인공으로 김초엽의 『지구 끝의 온실』을 출간하였다.',
		bookInfo: {
			title: '우리가 빛의 속도로 갈 수 없다면 (김초엽 소설)	',
			link: 'https://search.shopping.naver.com/book/catalog/32436342677',
			image: 'https://shopping-phinf.pstatic.net/main_3243634/32436342677.20230829090028.jpg',
			author: '김초엽',
			discount: '12600',
			publisher: '문예 출판사',
			pubdate: 'string',
			isbn: '9791190090018',
			description:
				'김초엽 첫 장편소설, 모두가 간절히 기다려온 이야기 이미 폭넓은 독자층을 형성하며 열렬한 사랑을 받고 있는 김초엽 작가는 더스트로 멸망한 이후의 세계를 첫 장편소설의 무대로 삼았다. 그는 지난해 말 플랫폼 연재를 통해 발표한 이야기를 반년이 훌쩍 넘는 시간 동안 수정하면서 한층 더 무르익도록 만들었다. 그리하여 장 구성부터 세부적인 장면은 물론 문장들까지 완전히 새롭게 탄생한 『지구 끝의 온실』이 2021년 8월 드디어 독자들을 만난다. 『지구 끝의 온실』은 자이언트북스의 네 번째 도서이다. 김중혁의 첫 시리즈 소설 『내일은 초인간』, 배명훈 장편소설 『빙글빙글 우주군』, 그리고 한국문학의 빛나는 일곱 명의 작가가 ‘즐거움’을 키워드로 쓴 단편소설을 묶은 앤솔로지 『놀이터는 24시』까지, 작가들의 자유로운 상상력을 응원하며 가장 그다운 작품을 선보일 수 있도록 해온 자이언트북스는 이번 주인공으로 김초엽의 『지구 끝의 온실』을 출간하였다.',
		},
		teamId: 'string',
		teamName: '책을 피서 운영자',
		writerInfo: {
			userId: 'daisy',
			userName: 'daisy',
			profileImg: 'string',
			email: 'string',
			phone: 'string',
		},
		regDt: '2023-09-05T09:34:15.135Z',
	};

	const searchParams = useSearchParams();
	const paramId = searchParams === null ? '' : searchParams.get('id');
	const [content, setContent] = useState<Partial<ContentsInfoResponse>>({});

	useEffect(() => {
		setContent(dummy);
	}, [paramId]);

	return (
		<div className="rem:pt-[100px] rem:mb-[132px] rem:px-[350px] h-full">
			{/* 경로 */}
			<ContentPath teamName={content.teamName ?? ''} />
			{/* 책 정보 */}
			<ContentBookInfo content={content} />
			{/* 포스팅 내용 */}
			<Content contentsText={content.contentsText} />
		</div>
	);
};
export default Page;
