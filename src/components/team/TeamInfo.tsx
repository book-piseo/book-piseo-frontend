import { IcTeamInfo } from '@assets/icons';
import React from 'react';
import Image from 'next/image';

const TeamInfo = () => {
	return (
		<div>
			<Image src={IcTeamInfo} alt="팀 소개" className="rem:w-[68px] rem:h-[68px]" />
			<div>
				<h2 className="text-dark-grey-1 text-h2_bold">책을 피서 운영팀</h2>
				<p className="text-dark-grey-1 text-p1_regular">
					일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
				</p>
			</div>
		</div>
	);
};

export default TeamInfo;
