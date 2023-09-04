/**
 * @유저_정보
 */
export const getUserInfo = async () => {
	const response = await fetch('/api/user', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return response.json();
};
