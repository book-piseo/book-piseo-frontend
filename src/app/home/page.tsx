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
import { getUserInfo } from '@apis/userInfoApi';

function HomePage() {
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);
	const [pageNumber, setPageNumber] = useState(0);

	// const userInfoData = getUserInfo();
	// const otherTeamContentsData = getOtherTeamContents({ pageNumber });
	// const [userInfo, otherTeamContents] = await Promise.all([userInfoData, otherTeamContentsData]);
	// console.log({ userInfo, otherTeamContents });

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
					{/* {contentList.map((content, index) => (
						<BookReview
							key={`book-review-item__${index}`}
							content={content}
							onClick={() => handleBookReview(content.contentId)}
						/>
					))} */}
				</div>
			</div>
		</>
	);
}

export default HomePage;
