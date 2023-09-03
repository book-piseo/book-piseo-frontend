import Avatar from '@components/elements/avatars/Avatar';
import { UserInfoDto } from '@models/user.model';
import React from 'react';

type ProfileProps = {
	userInfo: UserInfoDto;
	avatarSize?: 'small' | 'medium' | 'large';
	labelStyle?: string;
};

const AvatarProfile = ({
	userInfo,
	avatarSize = 'small',
	labelStyle = 'text-p2_medium text-dark-grey-1',
}: ProfileProps) => {
	return (
		<div className="flex items-center rem:gap-[8px]">
			<Avatar size={avatarSize} path={userInfo?.userImgUrl || ''} />
			<label className={labelStyle}>{userInfo.userName}</label>
		</div>
	);
};

export default AvatarProfile;
