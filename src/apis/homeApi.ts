/**
 * @홈_다른_팀_게시물_정보
 * 로그인 아닐 때도 노출
 */
export const getOtherTeamContents = async ({ pageNumber }: { pageNumber: number }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home/other-teams/contents/${pageNumber}`);
	return response.json();
};

/**
 * @홈_소속_팀_게시물_정보
 */
export const getMyTeamContents = async ({ pageNumber }: { pageNumber: number }) => {
	const authState = JSON.parse(localStorage.getItem('LOGIN_AUTH_STORE') || '') || '';

	if (!authState) {
		// NOTE :: 에러 처리 필요
	}

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home/affiliated-teams/contents/${pageNumber}`, {
		headers: {
			'User-Token': authState.state.userToken,
		},
	});
	return response.json();
};
