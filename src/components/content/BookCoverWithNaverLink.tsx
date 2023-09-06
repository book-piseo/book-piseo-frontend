'use client';
import React from 'react';
import Image from 'next/image';
import { ImgNaverLogo } from '@assets/images';
import { IcArrowUpLight } from '@assets/icons';
import EmptyBookCoverImage from '@components/common/EmptyBookCoverImage';

const BookCoverWithNaverLink = ({ src, link }: { src: string; link: string }) => {
	const handleLink = (link: string) => {
		window.open(link);
	};

	return (
		<div className="rem:min-w-[275px]">
			{src ? (
				<div className="relative w-full rem:h-[430px]">
					<Image src={src} alt="bookCover" fill unoptimized />{' '}
				</div>
			) : (
				<EmptyBookCoverImage width="full" height="rem:h-[430px]" borderRadius="0" />
			)}

			<div
				className="w-full rem:py-[14px] rem:pl-[20px] rem:pr-[10px] flex justify-between items-center bg-light-grey-1 cursor-pointer"
				onClick={() => {
					handleLink(link);
				}}
			>
				<div className="text-dark-grey-2 text-p1_medium">도서 구매</div>
				<div className="flex gap-0 items-center">
					<Image src={ImgNaverLogo} className="w-[60px] h-[11.52px]" alt="naverLogo" />
					<Image src={IcArrowUpLight} alt="rightArrow" />
				</div>
			</div>
		</div>
	);
};

export default BookCoverWithNaverLink;
