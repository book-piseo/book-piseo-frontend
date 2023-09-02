import { LogoGnb } from '@assets/icons';
import Navbar from '@components/layout/Header';
import Image from 'next/image';

export default function HeaderPage() {
	return (
		<header className="page-header fixed top-0 flex w-screen rem:h-[80px] items-center justify-between rem:px-[120px] bg-white">
			<div className="">
				<Image src={LogoGnb} alt="logo" className="rem:w-[144px] rem:h-[30px]" />
			</div>
			<Navbar />
		</header>
	);
}
