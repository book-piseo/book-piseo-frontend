/**
 * @type {import('next').NextConfig}
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
	reactStrictMode: true,
	images: {
		disableStaticImages: true,
	},
	redirect: async () => {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true,
			},
		];
	},
	// rewrite: async () => {
	// 	return [
	// 		{
	// 			source: '/:slug',
	// 			destination: process.env.NEXT_PUBLIC_API_URL + '/:slug',
	// 		},
	// 	];
	// },
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
