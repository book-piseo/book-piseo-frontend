'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IcOtherReadBook } from '@assets/icons';
import BookReview from '@components/home/BookReview';
import LatestTeamBookReview from '@components/home/LatestTeamBookReview';
import CarouselArrowButton from '@components/elements/buttons/CarouselArrowButton';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@stores/useAuthStore';
import useStore from '@hooks/useStore';
import { getOtherTeamContents } from '@apis/homeApi';

export type ContentList = {
	contentId: string;
	title: string;
	content: string;
	userInfo: {
		userId: string;
		userName: string;
		userImgUrl?: string;
		teamInfo: {
			teamId: string;
			teamName: string;
		};
	};
	bookInfo: {
		title: string;
		imgUrl?: string;
	};
};

const InitContentList = [
	{
		contentId: '1',
		title: '작가의 경험에 빗대어 나의 여행의 이유를 생각하게 하는 책',
		content: '',
		userInfo: {
			userId: '12332312',
			userName: '웬디',
			userImgUrl: '',
			teamInfo: {
				teamId: '2',
				teamName: '독서클럽: 책을 피서',
			},
		},
		bookInfo: {
			title: '1984',
			imgUrl: '',
		},
	},
	{
		contentId: '2',
		title: '책 이름처럼 멋진 신세계! 제목은 두줄까지만 노출하고 오버되면 말줄임입니다.',
		content: `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
		userInfo: {
			userId: '12332312',
			userName: '데이지',
			userImgUrl: '',
			teamInfo: {
				teamId: '1',
				teamName: '클라이밍 하다',
			},
		},
		bookInfo: {
			title: '여행의 이유',
			imgUrl: '',
		},
	},
	{
		contentId: '3',
		title: '풋살은 즐거워',
		content: '',
		userInfo: {
			userId: '12332312',
			userName: '작성자 이름',
			userImgUrl: '',
			teamInfo: {
				teamId: '1',
				teamName: '샤커즈',
			},
		},
		bookInfo: {
			title: '풋살은 즐거워',
			imgUrl: '',
		},
	},
	{
		contentId: '3',
		title: '(쏙쏙 들어오는) 함수형 코딩 심플한 코드로 복잡한 소프트웨어 길들이기 - 에릭노먼드 지음, 김은민 옮김',
		content: '',
		userInfo: {
			userId: '12332312',
			userName: '작성자 이름',
			userImgUrl: '',
			teamInfo: {
				teamId: '1',
				teamName: '에릭노먼드 지음, 김은민 옮김',
			},
		},
		bookInfo: {
			title: '(쏙쏙 들어오는) 함수형 코딩 심플한 코드로 복잡한 소프트웨어 길들이기 - 에릭노먼드 지음, 김은민 옮김',
			imgUrl: '',
		},
	},
	{
		contentId: '3',
		title: '프론트엔트: 타입스크립트 스터디',
		content: '',
		userInfo: {
			userId: '12332312',
			userName: '웬디',
			userImgUrl: '',
			teamInfo: {
				teamId: '1',
				teamName: '프론트엔트: 타입스크립트 스터디',
			},
		},
		bookInfo: {
			title: '이펙티브 타입스크립트',
			imgUrl: '',
		},
	},
];

function HomePage() {
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);
	const [contentList, setContentList] = useState<ContentList[]>(InitContentList);

	useEffect(() => {
		// getOtherTeamContents({ pageNumber: 0 }).then((res) => console.log(res));
	}, []);

	const handleBookReview = (contentId: string) => {
		router.push('/content');
	};

	return (
		<>
			{/* NOTE :: 로그인 시에 노출 */}
			{store && store.isLogin && (
				<div className="grid grid-cols-[18.13rem_1fr_18.13rem] items-center justify-center rem:pt-[50px] rem:pb-[20px]">
					<div className="flex rem:w-[290px] justify-center invisible">
						<CarouselArrowButton direction="left" disabled />
					</div>

					{/* 최신 팀 리뷰 캐러셀 */}
					<LatestTeamBookReview />

					<div className="flex rem:w-[290px] justify-center invisible">
						<CarouselArrowButton direction="right" />
					</div>
				</div>
			)}

			<div className="grid rem:gap-y-[34px] rem:mx-[290px] rem:pt-[70px]">
				<div className="flex items-center rem:gap-[8px]">
					<Image src={IcOtherReadBook} alt="other team read a book" className="rem:w-[48px] rem:h-[48px]" />
					<p className="text-s2_medium">다른 피서인은 이런 책을 읽었어요!</p>
				</div>
				{/* 리뷰 리스트 */}
				<div className="grid w-full h-fit grid-cols-4 rem:gap-x-[40px] rem:gap-y-[80px]">
					{contentList.map((content, index) => (
						<BookReview
							key={`book-review-item__${index}`}
							content={content}
							onClick={() => handleBookReview(content.contentId)}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default HomePage;
