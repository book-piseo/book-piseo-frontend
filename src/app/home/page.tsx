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
import { PageContentsInfoReponse } from '@models/contents.model';
import { useUserInfoStore } from '@stores/useUserInfoStore';
import { ImgEmptyOtherTeam } from '@assets/images';

function HomePage() {
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);
	const userStore = useStore(useUserInfoStore, (state) => state);

	const [pageNumber, setPageNumber] = useState(0);
	const [otherTeamContents, setOtherTeamContents] = useState<PageContentsInfoReponse | null>(null);

	useEffect(() => {
		fetchHomeData();
		//eslint-disable-next-line
	}, [store?.isLogin, store?.token]);

	const fetchHomeData = async () => {
		const otherTeamContentsData = await getOtherTeamContents({ pageNumber });
		setOtherTeamContents(otherTeamContentsData);
		if (store?.isLogin && store?.token) {
			const userInfoData = await getUserInfo({ token: store.token });
			userStore && userStore.setUserInfo(userInfoData);
		}
	};

	const handleBookReview = (contentId: string) => {
		router.push(`/content?id=${contentId}`);
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
				{!otherTeamContents ? (
					<div className="flex flex-col w-full rem:h-[400px] items-center justify-center rem:gap-[24px]">
						<Image src={ImgEmptyOtherTeam} alt="빈 리뷰 리스트" className="rem:w-[220px] rem:h-[220px]" />
						<p className="text-dark-grey-2 text-s2_medium">
							당신이 첫 글을 쓸 기회! <br /> 등록된 글이 아직 없어요.
						</p>
					</div>
				) : (
					<div className="grid w-full h-fit grid-cols-4 rem:gap-x-[40px] rem:gap-y-[80px]">
						{otherTeamContents && otherTeamContents?.content?.length == 0 && (
							<div className="flex flex-col w-full rem:h-[400px] items-center justify-center rem:gap-[24px]">
								<Image src={ImgEmptyOtherTeam} alt="빈 리뷰 리스트" className="rem:w-[220px] rem:h-[220px]" />
								<p className="text-dark-grey-2 text-s2_medium">
									당신이 첫 글을 쓸 기회! <br /> 등록된 글이 아직 없어요.
								</p>
							</div>
						)}
						{otherTeamContents &&
							otherTeamContents?.content?.length > 0 &&
							otherTeamContents?.content?.map((item, index) => (
								<BookReview
									key={`book-review-item__${index}`}
									content={item}
									onClick={() => handleBookReview(item.contentsId)}
								/>
							))}
					</div>
				)}
			</div>
		</>
	);
}

export default HomePage;
