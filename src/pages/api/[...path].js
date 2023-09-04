import httpProxyMiddleware from 'next-http-proxy-middleware';

export const config = {
	api: {
		bodyParser: false,
	},
};

export default (req, res) => {
	const proxyOptions = [
		{
			target: process.env.NEXT_PUBLIC_API_URL,
			changeOrigin: true,
			pathRewrite: { '^/api': '' },
			headers: {
				'Content-type': 'application/json',
			},
		},
		{
			target: process.env.NEXT_PUBLIC_NAVER_BOOK_API_URL,
			changeOrigin: true,
			pathRewrite: { '^/api/proxy': '' },
			headers: {
				'X-Naver-Client-Id': '7X6OVnZIeDZzKbsiwaqw',
				'X-Naver-Client-Secret': 'itnTnEsTsM',
			},
		},
	];

	const proxyOption = proxyOptions.find(({ pathRewrite }) => {
		return pathRewrite.some(({ patternStr }) => RegExp(patternStr).test(req?.url));
	});

	if (proxyOption) {
		return httpProxyMiddleware(req, res, proxyOption);
	} else {
		return res.status(404).send(null);
	}
};
