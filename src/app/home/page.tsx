import React from 'react';
import Image from 'next/image';
import { IcOtherReadBook } from '@assets/icons';
import BookReview from '@components/home/BookReview';

function Home() {
	return (
		<>
			{/* <div className="check-team-history h-[434px] pt-[40px] px-[75px] bg-primary-sub rounded-[30px]">
				<div className="flex items-center gap-[8px]">
					<Image src={IcTeamHistoryCheck} alt="team history check" />
					<span className="text-2xl font-semibold">팀원이 남긴 독서 기록을 지금 확인해보세요!</span>
				</div>
			</div> */}

			<div className="grid rem:gap-y-[34px] rem:pt-[70px]">
				<div className="flex items-center rem:gap-[8px]">
					<Image src={IcOtherReadBook} alt="other team read a book" className="rem:w-[48px] rem:h-[48px]" />
					<p className="text-s2_medium">다른 피서인은 이런 책을 읽었어요!</p>
				</div>
				{/* 리뷰 리스트 */}
				<BookReview />
			</div>
		</>
	);
}

export default Home;
