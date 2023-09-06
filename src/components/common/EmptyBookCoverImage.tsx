import React from 'react';
import Image from 'next/image';
import { ImgEmptyBookCover } from '@assets/images';

type EmptyBookCoverImageProps = {
	width?: string;
	height?: string;
	borderRadius?: string;
};

const EmptyBookCoverImage = ({ width, height = '470px', borderRadius = '16px' }: EmptyBookCoverImageProps) => {
	const getWidth = width ? `rem:w-[${width}]` : 'w-full';
	const getHeight = `rem:h-[${height}]`;
	const getRounded = `rounded-[${borderRadius}]`;
	return <Image src={ImgEmptyBookCover} className={`${getWidth} ${getHeight} ${getRounded}`} alt="빈 책 커버 이미지" />;
};

export default EmptyBookCoverImage;
