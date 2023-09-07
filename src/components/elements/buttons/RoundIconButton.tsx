import React from 'react';

type RoundIconButtonProps = {
	label: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	onClick?: () => void;
};

const RoundIconButton = ({ leftIcon, rightIcon, label, onClick }: RoundIconButtonProps) => {
	return (
		<div
			className="flex items-center rem:py-[10px] rem:px-[16px] gap-[2px] rounded-[30px] bg-white cursor-pointer"
			onClick={() => onClick && onClick()}
		>
			{leftIcon && <div className="flex-1">{leftIcon}</div>}
			<p className="text-dark-grey-2 text-p2_regular">{label}</p>
			{rightIcon && <div className="flex-1">{rightIcon}</div>}
		</div>
	);
};

export default RoundIconButton;
