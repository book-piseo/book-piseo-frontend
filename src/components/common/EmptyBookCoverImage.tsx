import React from 'react';
import Image from 'next/image';

type EmptyBookCoverImageProps = {
	width?: string;
	height?: string;
	borderRadius?: string;
};

const EmptyBookCoverImage = ({ width, height = '470px', borderRadius = '16px' }: EmptyBookCoverImageProps) => {
	const getWidth = width ? `rem:w-[${width}]` : 'w-full';
	const getHeight = `rem:h-[${height}]`;
	const getRounded = `rounded-[${borderRadius}]`;
	return <div className={`${getWidth} ${getHeight} ${getRounded} bg-light-grey-2`}></div>;
};

export default EmptyBookCoverImage;
