import React from 'react';

type RoundButtonProps = {
	type?: 'primary' | 'secondary';
	label: string;
	disabled?: boolean;
	onClick?: () => void;
};

const RoundButtonConfig = {
	primary: {
		default: 'bg-primary cursor-pointer',
		disabled: 'bg-light-grey-2 cursor-not-allowed',
		label: 'text-white',
	},
	secondary: {
		default: 'border border-primary cursor-pointer',
		disabled: 'border border-primary cursor-not-allowed',
		label: 'text-primary',
	},
};

const RoundButton = ({ type = 'primary', label, disabled = false, onClick }: RoundButtonProps) => {
	const buttonConfig = disabled ? RoundButtonConfig[type].disabled : RoundButtonConfig[type].default;

	return (
		<div
			className={`flex items-center justify-center w-fit rem:h-[44px] rem:px-[40px] rem:rounded-[30px] ${buttonConfig}`}
			onClick={() => !disabled && onClick && onClick()}
		>
			<span className={`text-p1_semibold ${RoundButtonConfig[type].label}`}>{label}</span>
		</div>
	);
};

export default RoundButton;
