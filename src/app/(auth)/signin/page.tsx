'use client';
import { useAuthStore } from '@/stores/useAuthStore';
import React from 'react';
import Image from 'next/image';
import { Logo } from '@assets/icons';
import Input from '@components/forms/inputGroups/Input';
import { LoginButton } from '@components/elements/buttons/LoginButton';
import useStore from '@hooks/useStore';
import { useRouter } from 'next/navigation';
import { login } from '@apis/loginApi';

function Login() {
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);

	if (!store) return <></>;

	const handleLogin = async () => {
		// const result = await login({ email: store.email, password: store.password });
		store.setIsLogin(true);
		router.push('/home');
	};

	return (
		<div className="flex w-screen h-screen flex-col items-center justify-center">
			<div className="rem:w-[590px]">
				<div className="logo flex items-center justify-center rem:pb-[64px] ">
					<Image src={Logo} alt="logo" className="rem:w-[170px] rem:h-[35px]" />
				</div>

				<div className="grid rem:gap-[20px] rem:pb-[30px]">
					<Input
						type="text"
						placeholder="이메일"
						value={store.email}
						onChange={(e) => store.setEmail(e.target.value)}
					/>
					<Input
						type="password"
						placeholder="비밀번호"
						value={store.password}
						onChange={(e) => store.setPassword(e.target.value)}
					/>
				</div>

				<LoginButton disabled={store.email.length === 0 || store.password.length === 0} onClick={handleLogin} />
			</div>
		</div>
	);
}

export default Login;
