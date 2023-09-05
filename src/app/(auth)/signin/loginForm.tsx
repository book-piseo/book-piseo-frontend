'use client';
import { login } from '@apis/loginApi';
import { getUserInfo } from '@apis/userInfoApi';
import { LoginButton } from '@components/elements/buttons/LoginButton';
import Input from '@components/forms/inputGroups/Input';
import useStore from '@hooks/useStore';
import { LoginRequest } from '@models/user.model';
import { useAuthStore } from '@stores/useAuthStore';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginForm = () => {
	const router = useRouter();
	const store = useStore(useAuthStore, (state) => state);

	const handleLogin = async () => {
		if (!store) return;
		if (store.email.length === 0 || store.password.length === 0) return;
		await login({ email: store.email, password: store.password }).then(async (res) => {
			if (res?.result === 200) {
				store.setIsLogin(true);
				router.push('/');
			} else if (res?.result === 401) {
				alert(res.data.errorMessage);
			}
		});
	};

	return (
		<>
			<div className="grid rem:gap-[20px] rem:pb-[30px]">
				<Input
					type="text"
					placeholder="이메일"
					value={store?.email || ''}
					onChange={(e) => store && store.setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="비밀번호"
					value={store?.password || ''}
					onChange={(e) => store && store.setPassword(e.target.value)}
				/>
			</div>

			<LoginButton disabled={store?.email.length === 0 || store?.password.length === 0} onClick={handleLogin} />
		</>
	);
};

export default LoginForm;
