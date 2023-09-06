import Link from 'next/link';

export const ContentPath = ({ teamName, teamId }: { teamName: string; teamId: string }) => {
	return (
		<div className="flex rem:gap-[6px] rem:mb-[30px] text-s3_medium ">
			<Link href={`/team/${teamId}`}>
				<div className="text-secondary hover:underline">{teamName}</div>
			</Link>
			<div className="text-dark-grey-2">{'>'}</div>
			<div className="text-dark-grey-2 ">독서 기록</div>
		</div>
	);
};
