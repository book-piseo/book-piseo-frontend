import React from 'react';
import Image from 'next/image';
import { ImgHomeMain2x } from '@assets/images';
import Footer from '@components/layout/Footer';

export default function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="home rem:pt-[80px]">
			<div className="w-screen h-fit rem:pt-[40px] rem:pb-[150px]">
				<div className="img-home rem:mx-[290px]">
					<Image src={ImgHomeMain2x} alt="image home main" />
				</div>
				{children}
			</div>
			<Footer />
		</section>
	);
}
