/**
 * @홈_다른_팀_게시물_정보
 */
export const getOtherTeamContents = async ({ pageNumber }: { pageNumber: number }) => {
	const response = await fetch(`/api/home/other-teams/contents/${pageNumber}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return response.json();
};

/**
 * @홈_소속_팀_게시물_정보
 */
export const getMyTeamContents = async ({ pageNumber }: { pageNumber: number }) => {
	const response = await fetch(`/api/home/affiliated-teams/contents/${pageNumber}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return response.json();
};
