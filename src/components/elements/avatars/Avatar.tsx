import { IcAvatarLarge } from '@assets/icons';
import React from 'react';
import Image from 'next/image';

type AvatarProps = {
	path: string;
	size?: 'small' | 'medium' | 'large';
};

const AvatarSizeConfig = {
	small: 'rem:w-[24px] rem:h-[24px]',
	medium: 'rem:w-[32px] rem:h-[32px]',
	large: 'rem:w-[42px] rem:h-[42px]',
};

const Avatar = ({ size = 'large', path }: AvatarProps) => {
	return (
		<div className="avatar flex items-center justify-center">
			<Image src={path ? path : IcAvatarLarge} alt="profile" className={`${AvatarSizeConfig[size]} rounded-full`} />
		</div>
	);
};

export default Avatar;
