import TeamBookReviewList from '@components/team/TeamBookReviewList';
import TeamInfo from '@components/team/TeamInfo';
import React from 'react';

const TeamPage = () => {
	return (
		<div className="rem:pt-[160px] rem:px-[350px]">
			<TeamInfo />
			<div className="w-full rem:h-[80px]"></div>
			<TeamBookReviewList />
		</div>
	);
};

export default TeamPage;
