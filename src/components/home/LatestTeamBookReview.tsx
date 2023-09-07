'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { IcArrowUpLight, IcBook, IcTeamHistoryCheck } from '@assets/icons';
import { ImgEmptyBookCover } from '@assets/images';
import { LinkButton } from '@components/elements/buttons/LinkButton';
import AvatarProfile from '@components/common/AvatarProfile';
import { format } from 'date-fns';
import { ContentsInfoResponse } from '@models/contents.model';
import { useRouter } from 'next/navigation';

type LatestTeamBookReviewProps = {
	teamBookReviews?: ContentsInfoResponse[];
};

const LatestTeamBookReview = ({ teamBookReviews }: LatestTeamBookReviewProps) => {
	const router = useRouter();
	const [firstBookReview, setFirstBookReview] = useState<ContentsInfoResponse | null>(null);
	const regDate = firstBookReview ? new Date(firstBookReview?.regDt) : new Date();

	useEffect(() => {
		if (teamBookReviews) {
			setFirstBookReview(teamBookReviews[0]);
		}

		// eslint-disable-next-line
	}, [JSON.stringify(teamBookReviews)]);

	const handleGoToContentsPage = (contentId: string) => {
		router.push(`/content?id=${contentId}`);
	};

	return (
		<>
			{teamBookReviews && (
				<div className="flex flex-col w-[calc(100vw-(18.13rem*2))] h-fit rem:pt-[30px] rem:px-[75px] rem:gap-[16px] bg-primary-sub rounded-[30px]">
					<div className="flex items-center justify-between">
						<div className="flex items-center rem:gap-[8px]">
							<Image
								src={IcTeamHistoryCheck}
								alt="팀원이 남긴 독서 기록을 지금 확인해보세요"
								className="rem:w-[48px] rem:h-[48px]"
							/>
							<span className="text-s3_medium text-dark-grey-1">팀원이 남긴 독서 기록을 지금 확인해보세요!</span>
						</div>
						{/* <div className="flex rem:min-h-[35px] items-center justify-center rem:py-[8px] rem:px-[24px] border bg-white rounded-[30px] border-secondary leading-[normal]">
							<span className="text-p1_semibold text-primary">1/5</span>
						</div> */}
					</div>
					<div className="grid grid-cols-[30%_70%]">
						<div
							className="relative rem:min-w-[305px] w-full rem:h-[270px] cursor-pointer"
							onClick={() => handleGoToContentsPage(firstBookReview?.contentsId || '')}
						>
							<Image
								fill
								unoptimized
								src={firstBookReview?.bookInfo?.image ? firstBookReview?.bookInfo?.image : ImgEmptyBookCover}
								alt="cover"
								className="rem:w-[305px] rem:h-[270px] rounded-[30px_30px_0_0] object-cover object-top"
							/>
						</div>

						<div className="flex flex-col rem:h-[230px] justify-between rem:pl-[80px]">
							<div className="flex flex-col rem:gap-[30px]">
								<div className="flex items-center justify-between">
									<div className="rem:px-[12px] border-l-[4px] border-dark-grey-1 text-dark-grey-1 text-s3_medium rem:leading-[22px]">
										{firstBookReview?.teamName || ''}
									</div>
									<LinkButton pathUrl={`/team/${firstBookReview?.teamId}`} className="flex items-center rem:gap-[6rem]">
										<span>전체 보기</span>
										<Image src={IcArrowUpLight} alt="전체 보기" className="rem:w-[22px] rem:h-[22px]" />
									</LinkButton>
								</div>
								<div
									className="flex flex-col rem:gap-[14px] cursor-pointer"
									onClick={() => handleGoToContentsPage(firstBookReview?.contentsId || '')}
								>
									<div className="text-dark-grey-1 text-s1_semibold text-ellipsis-line-2 rem:leading-[28px]">
										{firstBookReview?.contentsTitle || ''}
									</div>

									<div className="flex items-center rem:gap-[10px] text-dark-grey-2 text-p1_regular">
										<AvatarProfile
											avatarSize="medium"
											userInfo={firstBookReview?.writerInfo || undefined}
											labelStyle="text-dark-grey-2 text-p1_regular"
										/>
										<span>|</span>
										<span>{format(regDate, 'yyyy.MM.dd')}</span>
									</div>
								</div>
							</div>
							<div
								className="flex max-w-[80%] w-fit items-center rem:p-[10px] rem:gap-[8px] bg-white rounded-[4px] cursor-pointer"
								onClick={() => handleGoToContentsPage(firstBookReview?.contentsId || '')}
							>
								<Image src={IcBook} alt="책제목" className="rem:w-[24px] rem:h-[24px]" />
								<p className="text-ellipsis-line-1 text-dark-grey-1 text-p1_semibold">
									{firstBookReview?.bookInfo?.title || ''}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default LatestTeamBookReview;
