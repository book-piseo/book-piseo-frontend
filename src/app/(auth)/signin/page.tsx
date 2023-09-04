'use client';
import { useAuthStore } from '@stores/useAuthStore';
import React from 'react';
import Image from 'next/image';
import { Logo } from '@assets/icons';
import Input from '@components/forms/inputGroups/Input';
import { LoginButton } from '@components/elements/buttons/LoginButton';
import useStore from '@hooks/useStore';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Login() {
	// MARK :: zustand persist 적용 시, Error 발생
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);

	if (!store) return <></>;

	const handleLogin = () => {
		store.setIsLogin(true);
		router.push('/home');
	};

	return (
		<div className="flex w-screen h-screen flex-col items-center justify-center">
			<div className="rem:w-[590px]">
				<Link href="/home" className="logo flex items-center justify-center rem:pb-[64px] ">
					<Image src={Logo} alt="logo" className="rem:w-[170px] rem:h-[35px]" />
				</Link>

				<div className="grid rem:gap-[20px] rem:pb-[30px]">
					<Input type="text" placeholder="아이디" value={store.id} onChange={(e) => store.setId(e.target.value)} />
					<Input
						type="password"
						placeholder="비밀번호"
						value={store.pwd}
						onChange={(e) => store.setPwd(e.target.value)}
					/>
				</div>

				<LoginButton disabled={store.id.length === 0 || store.pwd.length === 0} onClick={handleLogin} />
			</div>
		</div>
	);
}

export default Login;
