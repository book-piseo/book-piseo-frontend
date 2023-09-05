/**
 * @유저_정보
 */
export const getUserInfo = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user`);

	if (!response.ok) {
		alert('예기치 못한 에러가 발생했습니다. 다시 시도해주세요. 🙂');
	}

	return response.json();
};
