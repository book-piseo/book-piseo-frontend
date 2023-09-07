import { revalidatePath } from 'next/cache';

/**
 * @팀_정보
 */
export const getTeamInfo = async ({ teamId, token }: { teamId: string; token: string }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}`, {
		headers: {
			'User-Token': token,
		},
		cache: 'no-cache',
	});
	return response.json();
};

/**
 * @팀_상세_소속_팀의_게시물_정보
 */
export const getTeamContentsInfo = async ({
	teamId,
	pageNumber,
	token,
}: {
	teamId: string;
	pageNumber: number;
	token: string;
}) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}/${pageNumber}`, {
		headers: {
			'User-Token': token,
		},
		cache: 'no-cache',
	});
	return response.json();
};
