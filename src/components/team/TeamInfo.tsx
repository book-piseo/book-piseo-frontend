'use client';
import React from 'react';
import { IcArrowUpLight, IcTeamInfo } from '@assets/icons';
import Image from 'next/image';
import RoundIconButton from '@components/elements/buttons/RoundIconButton';
import Avatar from '@components/elements/avatars/Avatar';
import { TeamDetailInfoReponse } from '@models/team.model';

type TeamInfoProps = {
	teamInfo?: TeamDetailInfoReponse;
};

const TeamInfo = ({ teamInfo }: TeamInfoProps) => {
	const profileImgs = teamInfo?.teamMembers?.map((member) => member.profileImg || '');

	const handleTeamMembersInfoModal = () => {
		// console.log('여기요>>');
	};

	return (
		<div className="flex flex-col rem:gap-[20px]">
			<Image src={IcTeamInfo} alt="팀 소개" className="rem:w-[68px] rem:h-[68px]" />

			{/* 팀 소개글 */}
			<div className="flex flex-col rem:gap-[16px]">
				<h2 className="text-dark-grey-1 text-h2_bold leading-[normal]">{teamInfo?.teamName}</h2>
				{teamInfo?.teamDescription && <p className="text-dark-grey-1 text-p1_regular">{teamInfo?.teamDescription}</p>}
			</div>

			{/* 팀 멤버 정보 */}
			<div className="team-members-info grid w-full rem:h-[70px] grid-cols-[repeat(2,1fr)] items-center rem:px-[40px] rounded-[10px] bg-primary-sub divide-x-[2px] divide-solid divide-light-grey-2">
				<div className="flex flex-1 items-center justify-between rem:pr-[32px]">
					<div className="flex gap-[4px]">
						<span className="text-dark-grey-2 text-s3_medium">팀원</span>
						<span className="text-primary text-s3_medium">{teamInfo?.teamMembers?.length}</span>
					</div>
					{/* <RoundIconButton
						label="전체 보기"
						rightIcon={<Image src={IcArrowUpLight} alt="팀원 전체 보기" className="rem:w-[22px] rem:h-[22px]" />}
						onClick={handleTeamMembersInfoModal}
					/> */}
				</div>
				<div className="flex flex-1 items-center justify-between rem:pl-[32px]">
					<span className="text-dark-grey-2 text-s3_medium">팀 마스터</span>
					<div className="flex rem:gap-[5px]">
						{profileImgs?.map((profileImg, index) => (
							<Avatar key={`team-masters__${index}`} path={profileImg} size="medium" />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamInfo;
