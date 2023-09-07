/**
 * @상세 게시글 조회
 */
export const getContent = async ({ contentId }: { contentId: string }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contents/${contentId}`, {
		cache: 'no-cache',
	});
	return response.json();
};
