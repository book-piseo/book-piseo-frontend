import React from 'react';
import Image from 'next/image';
import { IcRightArrow } from '@assets/icons';

type CarouselArrowButtonProps = {
	direction: 'left' | 'right';
	disabled?: boolean;
};

const ArrowButtonConfig = {
	left: {
		imageStyle: 'rotate-180',
		label: '왼쪽 화살표',
	},
	right: {
		imageStyle: '',
		label: '오른쪽 화살표',
	},
	default: 'cursor-pointer',
	disabled: 'cursor-not-allowed opacity-[0.5]',
};

const CarouselArrowButton = ({ direction, disabled = false }: CarouselArrowButtonProps) => {
	const disabledConfig = disabled ? ArrowButtonConfig['disabled'] : ArrowButtonConfig['default'];
	const arrowConfig = ArrowButtonConfig[direction];

	return (
		<div
			className={`flex items-center justify-center rem:w-[100px] rem:h-[100px] m-[5px] border rounded-full border-dark-grey-2 ${disabledConfig}`}
		>
			<Image
				src={IcRightArrow}
				alt={`${arrowConfig.label}`}
				className={`rem:w-[48px] rem:h-[48px] ${arrowConfig.imageStyle}`}
			/>
		</div>
	);
};

export default CarouselArrowButton;
