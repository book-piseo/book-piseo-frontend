import { ErrorResponse } from '@models/error.models';
import { LoginRequest } from '@models/user.model';

export interface ApiResult {
	result: number;
	data?: any;
}

/**
 * @로그인
 */
export const login = async (params: LoginRequest) => {
	return await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(params),
	})
		.then(async (res) => {
			if (res.status === 200) {
				return { result: 200 } as ApiResult;
			} else if (res.status !== 200) {
				const error: ErrorResponse = await res.json();
				return { result: res.status, data: error };
			}
		})
		.catch((e) => console.warn(e));
};
