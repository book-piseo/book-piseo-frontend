import React from 'react';
import TeamBookReviewItem from './TeamBookReviewItem';

const TeamBookReviewList = () => {
	return (
		<div className="flex flex-col">
			<div className="flex gap-[4px] text-dark-grey-1 text-s3_semibold leading-[normal]">
				<span>전체</span>
				<span>##</span>
			</div>
			<div className="flex flex-col divide-y divide-solid divide-light-grey-2">
				<TeamBookReviewItem />
				<TeamBookReviewItem />
				<TeamBookReviewItem />
			</div>
		</div>
	);
};

export default TeamBookReviewList;
