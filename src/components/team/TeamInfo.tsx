'use client';
import { IcArrowUpLight, IcTeamInfo } from '@assets/icons';
import React from 'react';
import Image from 'next/image';
import { LinkButton } from '@components/elements/buttons/LinkButton';
import RoundIconButton from '@components/elements/buttons/RoundIconButton';
import Avatar from '@components/elements/avatars/Avatar';

const TeamInfo = () => {
	const handleTeamMembersInfoModal = () => {
		console.log('여기요>>');
	};

	return (
		<div className="flex flex-col rem:gap-[20px]">
			<Image src={IcTeamInfo} alt="팀 소개" className="rem:w-[68px] rem:h-[68px]" />

			{/* 팀 소개글 */}
			<div className="flex flex-col rem:gap-[16px]">
				<h2 className="text-dark-grey-1 text-h2_bold leading-[normal]">책을 피서 운영팀</h2>
				<p className="text-dark-grey-1 text-p1_regular">
					일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
				</p>
			</div>

			{/* 팀 멤버 정보 */}
			<div className="team-members-info grid w-full rem:h-[70px] grid-cols-[repeat(2,1fr)] items-center rem:px-[40px] rounded-[10px] bg-primary-sub divide-x-[2px] divide-solid divide-light-grey-2">
				<div className="flex flex-1 items-center justify-between rem:pr-[32px]">
					<div className="flex gap-[4px]">
						<span className="text-dark-grey-2 text-s3_medium">팀원</span>
						<span className="text-primary text-s3_medium">4</span>
					</div>
					<RoundIconButton
						label="전체 보기"
						rightIcon={<Image src={IcArrowUpLight} alt="팀원 전체 보기" className="rem:w-[22px] rem:h-[22px]" />}
						onClick={handleTeamMembersInfoModal}
					/>
				</div>
				<div className="flex flex-1 items-center justify-between rem:pl-[32px]">
					<span className="text-dark-grey-2 text-s3_medium">팀 마스터</span>
					<div className="flex rem:gap-[5px]">
						<Avatar path={''} size="medium" />
						<Avatar path={''} size="medium" />
						<Avatar path={''} size="medium" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamInfo;
