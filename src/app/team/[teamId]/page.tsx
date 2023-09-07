'use client';
import { getTeamContentsInfo, getTeamInfo } from '@apis/teamApi';
import TeamBookReviewList from '@components/team/TeamBookReviewList';
import TeamInfo from '@components/team/TeamInfo';
import useStore from '@hooks/useStore';
import { PageContentsInfoReponse } from '@models/contents.model';
import { TeamDetailInfoReponse } from '@models/team.model';
import { useAuthStore } from '@stores/useAuthStore';
import React, { useEffect, useState } from 'react';

const TeamPage = ({ params }: { params: { teamId: string } }) => {
	const store = useStore(useAuthStore, (state) => state);
	const [teamInfo, setTeamInfo] = useState<TeamDetailInfoReponse | null>(null);
	const [content, setContent] = useState<PageContentsInfoReponse | null>(null);

	useEffect(() => {
		fetchTeamData();
		// eslint-disable-next-line
	}, [store?.isLogin]);

	const fetchTeamData = async () => {
		if (!store?.token) return;
		const getTeamInfoData = getTeamInfo({ teamId: params.teamId, token: store?.token });
		const getTeamContentsInfoData = getTeamContentsInfo({ teamId: params.teamId, pageNumber: 0, token: store?.token });
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
