/**
 * @유저_정보
 */
export const getUserInfo = async ({ token }: { token: string }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`, {
		headers: {
			'User-Token': token,
		},
	});
	return response.json();
};
