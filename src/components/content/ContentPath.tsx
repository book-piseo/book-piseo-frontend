import { ContentsInfoResponse } from '@models/contents.model';

export const ContentPath = ({ teamName }: { teamName: string }) => {
	return (
		<div className="flex rem:gap-[6px] rem:mb-[30px] text-s3_medium ">
			<div className="text-secondary">{teamName}</div>
			<div className="text-dark-grey-2">{'>'}</div>
			<div className="text-dark-grey-2 ">독서 기록</div>
		</div>
	);
};
