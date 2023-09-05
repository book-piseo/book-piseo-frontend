import React from 'react';
import Image from 'next/image';
import { Logo } from '@assets/icons';
import Link from 'next/link';
import LoginForm from '@components/auth/loginForm';

async function Login() {
	return (
		<div className="flex w-screen h-screen flex-col items-center justify-center">
			<div className="rem:w-[590px]">
				<Link href="/home" className="logo flex items-center justify-center rem:pb-[64px] ">
					<Image src={Logo} alt="logo" className="rem:w-[170px] rem:h-[35px]" />
				</Link>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
