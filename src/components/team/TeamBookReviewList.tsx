import React from 'react';
import TeamBookReviewItem from '@components/team/TeamBookReviewItem';
import { PageContentsInfoReponse } from '@models/contents.model';
import Image from 'next/image';
import { ImgEmptyOtherTeam } from '@assets/images';

const TeamBookReviewList = ({ contentsInfo }: { contentsInfo?: PageContentsInfoReponse }) => {
	return (
		<div className="flex flex-col">
			<div className="flex gap-[4px] text-dark-grey-1 text-s3_semibold leading-[normal]">
				<span>전체</span>
				<span>{contentsInfo?.totalElements || ''}</span>
			</div>
			{!contentsInfo ? (
				<div className="flex flex-col w-full rem:h-[400px] items-center justify-center rem:gap-[24px]">
					<Image src={ImgEmptyOtherTeam} alt="empty" className="rem:w-[220px] rem:h-[220px]" />
					<p className="text-dark-grey-2 text-s2_medium text-center">
						이 팀은 글을 작성하기에
						<br />더 좋은 타이밍을 기다리고 있어요.
					</p>
				</div>
			) : (
				<>
					{contentsInfo && contentsInfo?.content?.length === 0 && (
						<div className="flex flex-col w-full rem:h-[400px] items-center justify-center rem:gap-[24px]">
							<Image src={ImgEmptyOtherTeam} alt="empty" className="rem:w-[220px] rem:h-[220px]" />
							<p className="text-dark-grey-2 text-s2_medium text-center">
								이 팀은 글을 작성하기에 <br />더 좋은 타이밍을 기다리고 있어요.
							</p>
						</div>
					)}

					{/* TODO 무한 스크롤 구현 필요 */}
					{contentsInfo && contentsInfo?.totalElements && contentsInfo?.totalElements > 0 && (
						<div className="flex flex-col divide-y divide-solid divide-light-grey-2">
							{contentsInfo &&
								contentsInfo.content?.map((content, index) => (
									<TeamBookReviewItem key={`team-review-item__${index}`} content={content} />
								))}
						</div>
					)}
				</>
			)}
		</div>
	);
};

export default TeamBookReviewList;
