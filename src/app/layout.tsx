import './globals.css';
import type { Metadata } from 'next';
import HeaderPage from './page';

export const metadata: Metadata = {
	title: 'book-piseo',
};

// MARK :: RootLayout은 서버 -> 클라이언트 컴포넌트가 될 수 없음
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<link
				rel="stylesheet"
				as="style"
				crossOrigin=""
				href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
				// @ts-ignore
				precedence="default"
			/>
			<body className="overflow-hidden">
				<div className="w-screen h-full relative">
					<HeaderPage />
					<main className={`w-screen h-screen overflow-x-hidden overflow-y-auto rem:pt-[80px]`}>{children}</main>
				</div>
			</body>
		</html>
	);
}
