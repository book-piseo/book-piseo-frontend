import React from 'react';
import Image from 'next/image';
import AvatarProfile from '@components/common/AvatarProfile';
import { IcBook } from '@assets/icons';
import { ContentsInfoResponse } from '@models/contents.model';
import { format } from 'date-fns';
import EmptyBookCoverImage from '@components/common/EmptyBookCoverImage';
import { useRouter } from 'next/navigation';

const TeamBookReviewItem = ({ content }: { content: ContentsInfoResponse }) => {
	const router = useRouter();
	const formatRegDate = content?.regDt ? new Date(content.regDt) : new Date();

	const handleGoToContentsPage = (contentId: string) => {
		router.push(`/content?id=${contentId}`);
	};

	return (
		<div className="flex space-x-[2.5rem] rem:py-[40px]">
			<div
				className="relative rem:min-w-[170px] w-fit rem:h-[265px] cursor-pointer"
				onClick={() => handleGoToContentsPage(content?.contentsId)}
			>
				{content?.bookInfo?.image ? (
					<Image fill unoptimized src={content?.bookInfo?.image} alt="cover" />
				) : (
					<EmptyBookCoverImage borderRadius={'0'} />
				)}
			</div>

			<div className="flex w-[calc(100%-170px)] flex-col justify-between rem:gap-[20px]">
				<div className="flex flex-col rem:gap-[20px]">
					<div className="flex items-center rem:gap-[10px] text-dark-grey-2 text-p1_regular">
						<AvatarProfile
							avatarSize="medium"
							userInfo={content?.writerInfo || undefined}
							labelStyle="text-dark-grey-2 text-p1_regular"
						/>
						<span>|</span>
						<span>{format(formatRegDate, 'yyyy-MM-dd')}</span>
					</div>

					<div
						className="flex flex-col rem:gap-[30px] cursor-pointer"
						onClick={() => handleGoToContentsPage(content?.contentsId)}
					>
						<div className="flex flex-col rem:gap-[10px]">
							<h2 className="text-dark-grey-1 text-s1_semibold text-ellipsis-line-2 rem:leading-[28px]">
								{content?.contentsTitle}
							</h2>
							<p className="text-p1_regular text-ellipsis-line-3">{content?.contentsText}</p>
						</div>
					</div>
				</div>

				<div className="flex max-w-[80%] w-fit items-center rem:p-[10px] rem:gap-[8px] bg-primary-sub rounded-[4px]">
					<Image src={IcBook} alt="title" className="rem:w-[24px] rem:h-[24px]" />
					<p className="text-ellipsis-line-1 text-dark-grey-1 text-p1_semibold">{content?.bookInfo?.title}</p>
				</div>
			</div>
		</div>
	);
};

export default TeamBookReviewItem;
