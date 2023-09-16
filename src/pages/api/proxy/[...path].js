import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
	api: {
		bodyParser: false,
	},
};

export default createProxyMiddleware({
	target: process.env.NEXT_PUBLIC_NAVER_BOOK_API_URL,
	changeOrigin: true,
	pathRewrite: { '^/api/proxy': '' },
	headers: {
		'X-Naver-Client-Id': `${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`,
		'X-Naver-Client-Secret': `${process.env.NEXT_PUBLIC_NAVER_CLIENT_KEY}`,
	},
});
