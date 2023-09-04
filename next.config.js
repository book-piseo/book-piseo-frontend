/**
 * @type {import('next').NextConfig}
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		disableStaticImages: true,
	},
	redirects: async () => {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,
			},
		];
	},
	rewrites: async () => {
		return [
			{
				destination: 'https://book-piseo.com/api/:path*:',
				source: '/api/:path*',
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
