import { ContentsSaveRequest } from '@models/contents.model';

/**
 * Naver 책 목록 검색
 * */
export const getNaverBookList = (query: string) => {
	return fetch(`api/proxy/v1/search/book?query=${query}`, {
		method: 'GET',
		cache: 'no-store',
		headers: {
			accept: 'application/json, text/plain, */*',
			'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
			'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NEXT_PUBLIC_NAVER_CLIENT_KEY || '',
		},
	})
		.then((res) => {
			if (!res.ok) {
				throw new Error(`${res.status} error`);
			}
			return res.json();
		})
		.then((data) => {
			return data;
		})
		.catch((e) => {
			console.debug(e);
		});
};

/*
 * 게시글 작성
 * */

export interface ApiResult {
	result: number;
	data: any;
}

export const postContent = async ({ token, param }: { token: string; param: ContentsSaveRequest }) => {
	return fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contents`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'User-Token': token,
		},
		cache: 'no-cache',
		body: JSON.stringify(param),
	})
		.then(async (res) => {
			const data = await res.json();
			return { result: res.status, data } as ApiResult;
		})
		.catch((e) => console.warn(e));
};
