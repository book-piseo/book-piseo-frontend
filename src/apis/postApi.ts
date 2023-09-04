export const getNaverBookList = (query: string) => {
	return fetch(`api/proxy/v1/search/book?query=${query}`, {
		method: 'GET',
		cache: 'no-store',
		headers: {
			accept: 'application/json, text/plain, */*',
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
