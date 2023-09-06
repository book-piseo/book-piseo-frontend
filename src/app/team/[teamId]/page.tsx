'use client';
import { getTeamContentsInfo, getTeamInfo } from '@apis/teamApi';
import TeamBookReviewList from '@components/team/TeamBookReviewList';
import TeamInfo from '@components/team/TeamInfo';
import { PageContentsInfoReponse } from '@models/contents.model';
import { TeamDetailInfoReponse } from '@models/team.model';
import React, { useEffect, useState } from 'react';

const TeamPage = ({ params }: { params: { teamId: string } }) => {
	const authState = JSON.parse(localStorage.getItem('LOGIN_AUTH_STORE') || '') || '';
	console.log(authState);

	const [teamInfo, setTeamInfo] = useState<TeamDetailInfoReponse | null>(null);
	const [content, setContent] = useState<PageContentsInfoReponse | null>(null);

	useEffect(() => {}, [params.teamId]);

	const fetchTeamData = async () => {
		const getTeamInfoData = getTeamInfo({ teamId: params.teamId });
		const getTeamContentsInfoData = getTeamContentsInfo({ teamId: params.teamId, pageNumber: 0 });
		const [teamInfoData, teamContentsInfoData] = await Promise.all([getTeamInfoData, getTeamContentsInfoData]);

		setTeamInfo(teamInfoData);
		setContent(teamContentsInfoData);
	};

	return (
		<div className="rem:pt-[160px] rem:px-[350px]">
			<TeamInfo teamInfo={teamInfo || undefined} />
			<div className="w-full rem:h-[80px]"></div>
			<TeamBookReviewList contentsInfo={content || undefined} />
		</div>
	);
};

export default TeamPage;
