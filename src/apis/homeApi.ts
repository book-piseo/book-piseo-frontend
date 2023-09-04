/**
 * @홈_다른_팀_게시물_정보
 */
export const getOtherTeamContents = async ({ pageNumber }: { pageNumber: number }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home/other-teams/contents/${pageNumber}`, {
		cache: 'no-cache',
		mode: 'no-cors',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrer: 'no-referrer',
	});
	console.log({ response });
	return response.json();
};

/**
 * @홈_소속_팀_게시물_정보
 */
export const getMyTeamContents = async ({ pageNumber }: { pageNumber: number }) => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home/affiliated-teams/contents/${pageNumber}`, {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	});

	return response.json();
};
