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
	return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(params),
	})
		.then(async (res) => {
			const data = await res.json();
			return { result: res.status, data } as ApiResult;
		})
		.catch((e) => console.warn(e));
};
