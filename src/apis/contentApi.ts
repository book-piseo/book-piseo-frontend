/**
 * @상세 게시글 조회
 */
export const getContent = async ({ token, contentId }: { token: string; contentId: string }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contents/${contentId}`, {
		headers: {
			'User-Token': token,
		},
		cache: 'no-cache',
	});
	return response.json();
};
