'use client';
import React from 'react';
import Image from 'next/image';
import { IcAvatarLarge, IcWrite, LogoGnb } from '@assets/icons';
import Link from 'next/link';
import { useAuthStore } from '@/stores/useAuthStore';
import useStore from '@hooks/useStore';
import { IconButton } from '@components/elements/buttons/IconButton';
import RoundButton from '@components/elements/buttons/RoundButton';
import { useRouter } from 'next/navigation';
import Avatar from '@components/elements/avatars/Avatar';

const Navbar = () => {
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);

	if (store && !store?.isLogin) {
		// router.push('/home');
	}

	return (
		<div className="flex items-center rem:gap-[40px]">
			{store && !store.isLogin ? (
				<Link href="/signin">
					<RoundButton type="secondary" label="로그인" />
				</Link>
			) : (
				<>
					{/* MARK :: SAVE BUTTON */}
					<RoundButton
						label="저장"
						disabled={false}
						onClick={() => {
							alert('확인');
						}}
					/>

					{/* MARK :: SAVE BUTTON(DISBLAED) */}
					<RoundButton
						label="저장"
						disabled={true}
						onClick={() => {
							alert('확인');
						}}
					/>

					{/* MARK :: WRITING BUTTON */}
					<Link href="/post">
						<IconButton icon={IcWrite} label="글쓰기" />
					</Link>

					{/* MARK :: AVATAR  */}
					<div
						className="cursor-pointer"
						onClick={() => {
							store && store.setIsLogin(false);
							router.push('/signin');
						}}
						title="로그아웃"
					>
						<Avatar path="" />
					</div>
				</>
			)}
		</div>
	);
};

export default Navbar;
