import { ImgBookCoverExample } from '@assets/images';
import React from 'react';
import Image from 'next/image';
import AvatarProfile from '@components/common/AvatarProfile';
import { LinkButton } from '@components/elements/buttons/LinkButton';
import { IcBook } from '@assets/icons';
import { ContentsInfoResponse } from '@models/contents.model';
import { format } from 'date-fns';

const TeamBookReviewItem = ({ content }: { content: ContentsInfoResponse }) => {
	const formatRegDate = content?.regDt ? new Date(content.regDt + '00:00:00') : new Date();

	return (
		<div className="flex space-x-[2.5rem] rem:py-[40px]">
			<Image
				src={content?.bookInfo?.image || ImgBookCoverExample}
				alt="책 커버 이미지"
				className="flex-1 rem:max-w-[170px]"
			/>

			<div className="flex w-[calc(100%-170px)] flex-col justify-between rem:gap-[20px]">
				<div className="flex items-center rem:gap-[10px] text-dark-grey-2 text-p1_regular">
					<AvatarProfile
						avatarSize="medium"
						userInfo={content?.writerInfo || undefined}
						labelStyle="text-dark-grey-2 text-p1_regular"
					/>
					<span>|</span>
					<span>{format(formatRegDate, 'yyyy-MM-dd')}</span>
				</div>

				<div className="flex flex-col rem:gap-[30px]">
					<div className="flex flex-col rem:gap-[10px]">
						<h2 className="review-title text-dark-grey-1 text-s1_semibold text-ellipsis-line-2 rem:leading-[28px]">
							{content?.contentsTitle}
						</h2>
						<p className="text-p1_regular text-ellipsis-line-3">{content?.contentsText}</p>
					</div>
				</div>
				<div className="flex max-w-[80%] items-center rem:p-[10px] rem:gap-[8px] bg-primary-sub rounded-[4px]">
					<Image src={IcBook} alt="책제목" className="rem:w-[24px] rem:h-[24px]" />
					<p className="text-ellipsis-line-1 text-dark-grey-1 text-p1_semibold">{content?.bookInfo?.title}</p>
				</div>
			</div>
		</div>
	);
};

export default TeamBookReviewItem;
