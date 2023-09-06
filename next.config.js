/**
 * @type {import('next').NextConfig}
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
	images: {
		disableStaticImages: true,
		// 외부 이미지를 가져오기 위한 설정
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'shopping-phinf.pstatic.net',
			},
			{
				protocol: 'http',
				hostname: 'bookthumb.phinf.naver.net',
				port: '',
				pathname: '/corvor/**',
			},
		],
	},
	reactStrictMode: true,
	redirect: async () => {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		];
	},
	// 웹팩을 통해 svg 파일을 리액트 컴포넌트로 변환하는 설정이다
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
};
module.export = nextConfig;
