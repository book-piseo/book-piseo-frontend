import { createProxyMiddleware } from 'http-proxy-middleware'

export const config = {
	api: {
		bodyParser: false,
	},
}

export default createProxyMiddleware({
	target: 'https://openapi.naver.com',
	changeOrigin: true,
	pathRewrite: { '^/api/proxy': '' },
	headers: {
		'X-Naver-Client-Id': '7X6OVnZIeDZzKbsiwaqw',
		'X-Naver-Client-Secret': 'itnTnEsTsM',
	},
})
