/**
 * @팀_정보
 */
export const getTeamInfo = async ({ teamId }: { teamId: string }) => {
	const response = await fetch(`api/team/${teamId}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return response.json();
};

/**
 * @팀_상세_소속_팀의_게시물_정보
 */
export const getTeamContentsInfo = async ({ teamId, pageNumber }: { teamId: string; pageNumber: number }) => {
	const response = await fetch(`api/team/${teamId}/${pageNumber}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return response.json();
};
