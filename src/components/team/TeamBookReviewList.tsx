import React, { useEffect, useState } from 'react';
import TeamBookReviewItem from './TeamBookReviewItem';
import { PageContentsInfoReponse } from '@models/contents.model';
import { getTeamContentsInfo } from '@apis/teamApi';

const TeamBookReviewList = ({ teamId }: { teamId: string }) => {
	const [pageNumber, setPageNumber] = useState(0);
	const [result, setResult] = useState<PageContentsInfoReponse | null>(null);

	useEffect(() => {
		getTeamContentsInfo({ teamId, pageNumber }).then((data) => {
			console.log({ data });
			setResult(data.content);
		});
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex gap-[4px] text-dark-grey-1 text-s3_semibold leading-[normal]">
				<span>전체</span>
				<span>{result?.totalPages || ''}</span>
			</div>
			{result && result?.content.length === 0 && (
				<div className="flex flex-col w-full rem:h-[400px] items-center justify-center rem:gap-[24px]">
					<div className="rem:w-[175px] rem:h-[175px] rounded-full bg-primary-sub"></div>
					<p className="text-dark-grey-2 text-s3_medium">등록된 게시물이 없습니다.</p>
				</div>
			)}
			{result && result?.totalPages && result.totalPages > 0 && (
				<div className="flex flex-col divide-y divide-solid divide-light-grey-2">
					{result && result.content?.map((content) => <TeamBookReviewItem content={content} />)}
				</div>
			)}
		</div>
	);
};

export default TeamBookReviewList;
