'use client';
import { IcBook } from '@assets/icons';
import EmptyBookCoverImage from '@components/common/EmptyBookCoverImage';
import React, { useState } from 'react';
import Image from 'next/image';
import AvatarProfile from '@components/common/AvatarProfile';
import { ContentsInfoResponse } from '@models/contents.model';
import { useRouter } from 'next/navigation';

type BookReviewItemProps = {
	content: ContentsInfoResponse;
	onClick: () => void;
};

const BookReview = ({ content, onClick }: BookReviewItemProps) => {
	const router = useRouter();
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const handleGoToTeamPage = () => {
		router.push(`/team/${content.teamId}`);
	};

	return (
		<div className="flex flex-col w-full rem:gap-[20px]">
			{/* 책 커버 이미지 */}
			<div
				className="relative cursor-pointer"
				onClick={onClick}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
			>
				<div className={`absolute w-full rem:h-[470px] ${isHovering ? 'visible' : 'invisible'}`}>
					<div className={`absolute w-[80%] h-fit bg-white rounded-br-[16px] z-20`}>
						<div className="flex items-start rem:p-[14px] rem:gap-[8px]">
							<Image src={IcBook} alt="도서 제목" className="rem:w-[24px] rem:h-[24px]" />
							<div className="flex items-center rem:h-min[24px]">
								<p className="rem:w-max[57px] text-p1_semibold text-dark-grey-1 text-ellipsis-line-3">
									{content?.bookInfo?.title}
								</p>
							</div>
						</div>
					</div>
					<div className={`absolute w-full h-full rounded-[16px] bg-primary opacity-[0.6] z-10`}></div>
				</div>

				<div className="relative rem:min-w-[305px] w-full rem:h-[470px]">
					{content?.bookInfo?.image ? (
						<Image fill unoptimized src={content?.bookInfo?.image} alt="cover" className="rounded-[16px]" />
					) : (
						<EmptyBookCoverImage />
					)}
				</div>
			</div>

			<div className="flex flex-col rem:gap-[10px] rem:leading-[22px]">
				<div
					className="rem:w-max[305px] text-s3_semibold text-dark-grey-1 text-ellipsis-line-2 cursor-pointer"
					onClick={onClick}
				>
					{content.contentsTitle}
				</div>

				{/* 리뷰 정보 */}
				<AvatarProfile userInfo={content?.writerInfo} />

				{/* 팀 정보 */}
				<div
					className="rem:w-max[305px] text-p2_medium text-light-grey-2 text-ellipsis-line-1 cursor-pointer hover:underline"
					onClick={handleGoToTeamPage}
				>
					{content?.teamName || ''}
				</div>
			</div>
		</div>
	);
};

export default BookReview;
