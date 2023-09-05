'use client';
import { getTeamInfo } from '@apis/teamApi';
import TeamBookReviewList from '@components/team/TeamBookReviewList';
import TeamInfo from '@components/team/TeamInfo';
import { TeamDetailInfoReponse } from '@models/team.model';
import React, { useEffect, useState } from 'react';

const TeamPage = ({ params }: { params: { teamId: string } }) => {
	const [teamInfo, setTeamInfo] = useState<TeamDetailInfoReponse>();

	useEffect(() => {
		getTeamInfo({ teamId: params.teamId }).then((data) => setTeamInfo(data));
	}, [params.teamId]);

	return (
		<div className="rem:pt-[160px] rem:px-[350px]">
			<TeamInfo teamInfo={teamInfo} />
			<div className="w-full rem:h-[80px]"></div>
			<TeamBookReviewList teamId={params.teamId} />
		</div>
	);
};

export default TeamPage;
