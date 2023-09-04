import { SERVER_API_URL } from '@constants/consts';
import { ErrorResponse } from '@models/error.models';
import { LoginRequest } from '@models/user.model';

/**
 * @로그인
 */
export const login = async (params: LoginRequest) => {
	const response = await fetch('/api/login', {
		method: 'POST',
		body: JSON.stringify(params),
	});

	console.log(response);
	return response.json();
};
