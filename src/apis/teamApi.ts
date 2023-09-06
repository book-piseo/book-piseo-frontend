/**
 * @팀_정보
 */
export const getTeamInfo = async ({ teamId }: { teamId: string }) => {
	const authState = JSON.parse(localStorage.getItem('LOGIN_AUTH_STORE') || '') || '';

	if (!authState) {
		// NOTE :: 에러 처리 필요
	}

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}`, {
		headers: {
			'User-Token': authState.state.token,
		},
	});
	return response.json();
};

/**
 * @팀_상세_소속_팀의_게시물_정보
 */
export const getTeamContentsInfo = async ({ teamId, pageNumber }: { teamId: string; pageNumber: number }) => {
	const authState = JSON.parse(localStorage.getItem('LOGIN_AUTH_STORE') || '') || '';

	if (!authState) {
		// NOTE :: 에러 처리 필요
	}

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}/${pageNumber}`, {
		headers: {
			'User-Token': authState.state.token,
		},
	});
	return response.json();
};
