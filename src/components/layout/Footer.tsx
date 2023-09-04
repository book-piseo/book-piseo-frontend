import React from 'react';
import Image from 'next/image';
import { LogoFooter } from '@assets/icons';

const Footer = () => {
	return (
		<div className="flex items-center w-full rem:h-[238px] rem:px-[120px] bg-primary-sub">
			<div className="flex flex-col flex-1">
				<div className="rem:pb-[37px]">
					<Image src={LogoFooter} alt="logo" className="rem:w-[144px] rem:h-[30px]" />
				</div>
				<div className="w-full rem:h-px bg-light-grey-2"></div>
				<div className="flex rem:pt-[30px] justify-between">
					<div className="text-dark-grey-1 text-s3_medium">ABOUT 책을 피서</div>
					<div className="text-[#666] text-s3_medium">@Copyright book-piseo. All rights reserved.</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
