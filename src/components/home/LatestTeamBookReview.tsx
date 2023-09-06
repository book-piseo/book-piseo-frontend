import React from 'react';
import Image from 'next/image';
import { IcArrowUpLight, IcBook, IcTeamHistoryCheck } from '@assets/icons';
import { ImgBookCoverExample } from '@assets/images';
import { LinkButton } from '@components/elements/buttons/LinkButton';
import AvatarProfile from '@components/common/AvatarProfile';
import { format } from 'date-fns';

const LatestTeamBookReview = () => {
	return (
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
				<Image
					src={ImgBookCoverExample}
					alt="예시 책 이미지"
					className="rem:w-[305px] rem:h-[270px] rounded-[30px_30px_0_0] object-cover object-top "
				/>

				<div className="flex flex-col rem:h-[230px] justify-between rem:pl-[80px]">
					<div className="flex flex-col rem:gap-[30px]">
						<div className="flex items-center justify-between">
							<div className="rem:px-[12px] border-l-[4px] border-dark-grey-1 text-dark-grey-1 text-s3_medium rem:leading-[22px]">
								책을 피서 운영팀
							</div>
							<LinkButton
								pathUrl={`/team/${'67d48340-459c-4d5f-8cff-22e40875271c'}`}
								className="flex items-center rem:gap-[6rem]"
							>
								<span>전체 보기</span>
								<Image src={IcArrowUpLight} alt="전체 보기" className="rem:w-[22px] rem:h-[22px]" />
							</LinkButton>
						</div>
						<div className="flex flex-col rem:gap-[14px]">
							<div className="text-dark-grey-1 text-s1_semibold text-ellipsis-line-2 rem:leading-[28px]">
								7월의 책, 조지 오웰 - 1984
							</div>

							<div className="flex items-center rem:gap-[10px] text-dark-grey-2 text-p1_regular">
								<AvatarProfile
									avatarSize="medium"
									userInfo={{
										userId: 'sdjlfjslfjlsfjlsd',
										userName: '웬디(Wendy)',
										profileImg: '',
										email: 'imwen3y@gmail.com',
									}}
									labelStyle="text-dark-grey-2 text-p1_regular"
								/>
								<span>|</span>
								<span>{format(new Date('2023-07-21'), 'yyyy.MM.dd')}</span>
							</div>
						</div>
					</div>
					<div className="flex max-w-[80%] w-fit items-center rem:p-[10px] rem:gap-[8px] bg-white rounded-[4px]">
						<Image src={IcBook} alt="책제목" className="rem:w-[24px] rem:h-[24px]" />
						<p className="text-ellipsis-line-1 text-dark-grey-1 text-p1_semibold">1984</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LatestTeamBookReview;
