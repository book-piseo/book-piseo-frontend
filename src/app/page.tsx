'use client';
import { LogoGnb } from '@assets/icons';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { IcWrite } from '@assets/icons';
import Link from 'next/link';
import { useAuthStore } from '@stores/useAuthStore';
import useStore from '@hooks/useStore';
import { IconButton } from '@components/elements/buttons/IconButton';
import RoundButton from '@components/elements/buttons/RoundButton';
import { useRouter, usePathname } from 'next/navigation';
import Avatar from '@components/elements/avatars/Avatar';
import { ModalType, useModalActions } from '@stores/useModalStore';
import { useUserInfoStore } from '@stores/useUserInfoStore';
import { PostStore, usePostStore } from '@stores/usePostStore';

export default function Page() {
	const router = useRouter();
	const pathName = usePathname();
	const store = useStore(useAuthStore, (state) => state);
	const userStore = useStore(useUserInfoStore, (state) => state);
	const postStore = usePostStore();
	const changeModalState = useModalActions();

	useEffect(() => {
		// NOTE ::: 루트로 접근 시, home으로 이동
		if (pathName === '/') {
			router.push('/home');
		}
		if (pathName === '/signin' && !store?.isLogin) {
			router.push('/signin');
		}
		// eslint-disable-next-line
	}, [pathName, store?.isLogin]);

	const handleAvatar = () => {
		store && store.clearAuth();
		userStore && userStore.clearUserInfo();
		router.push('/');
	};

	const handleSaveButton = () => {
		changeModalState(ModalType.postConfirm);
	};

	const isPostPage = pathName === '/post';
	const isHiddenHeader = pathName === '/signin' ? 'hidden' : 'flex';

	const getIsDisableSaveButton = (postStore: PostStore) => {
		const isEmpty = (text: string) => text.trim() === '';
		if (isEmpty(postStore.contentsTitle) || isEmpty(postStore.contentsText) || isEmpty(postStore.bookInfo.isbn)) {
			return true;
		}
		return false;
	};

	return (
		<header
			className={`page-header fixed top-0 w-screen rem:h-[80px] items-center justify-between rem:px-[120px] bg-white z-50 ${isHiddenHeader}`}
		>
			<Link href="/home">
				<Image src={LogoGnb} alt="logo" className="rem:w-[144px] rem:h-[30px]" />
			</Link>
			<div className="flex items-center rem:gap-[40px]">
				{store && !store.isLogin ? (
					<Link href="/signin">
						<RoundButton type="secondary" label="로그인" />
					</Link>
				) : (
					<>
						{isPostPage ? (
							//  MARK :: SAVE BUTTON
							<RoundButton label="저장" disabled={getIsDisableSaveButton(postStore)} onClick={handleSaveButton} />
						) : (
							// MARK :: WRITING BUTTON
							<Link href="/post">
								<IconButton icon={IcWrite} label="글쓰기" />
							</Link>
						)}
						{/* MARK :: AVATAR  */}
						{!isPostPage && (
							<div className="cursor-pointer" onClick={handleAvatar} title="로그아웃">
								<Avatar path={(userStore && userStore?.userInfo?.profileImg) || ''} />
							</div>
						)}
					</>
				)}
			</div>
		</header>
	);
}
