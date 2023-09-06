/**
 * @유저_정보
 */
export const getUserInfo = async () => {
	const authState = JSON.parse(localStorage.getItem('LOGIN_AUTH_STORE') || '') || '';

	if (!authState) {
		// NOTE :: 에러 처리 필요
	}

	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
		headers: {
			'User-Token': authState.state.userToken,
		},
	});
	return response.json();
};
