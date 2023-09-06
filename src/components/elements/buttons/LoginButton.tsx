import React from 'react';

type ButtonProps = {
	ref?: React.RefObject<HTMLDivElement>;
	label?: string;
	width?: string;
	height?: string;
	disabled: boolean;
	onClick: () => void;
};

const LoginButtonConfig = {
	disabled: 'bg-light-grey-2 cursor-not-allowed',
	active: 'bg-primary cursor-pointer',
};

export const LoginButton = ({ ref, label = '로그인', width, height, disabled, onClick }: ButtonProps) => {
	const config = disabled ? 'disabled' : 'active';
	return (
		<div
			ref={ref}
			className={`flex items-center justify-center w-full rem:h-[62px] rem:py-[10px] rem:px-[20px] rem:rounded-[10px] ${LoginButtonConfig[config]}`}
			onClick={onClick}
		>
			<span className="text-white text-p1_semibold">{label}</span>
		</div>
	);
};
