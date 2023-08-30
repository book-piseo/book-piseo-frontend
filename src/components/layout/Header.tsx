
import React from 'react';
import Image from 'next/image';
import { IcWrite, LogoGnb } from '../../../public/assets/icons';

const Header = () => {
    return (
        <div className='flex h-[104px] items-center justify-between px-72 bg-white border border-b-1 border-light-grey-2'>
            <div className="">
                <Image src={LogoGnb} alt='logo' width={192} height={40}/>
            </div>
            <button className='piseo-login-button flex w-fit h-[56px] items-center justify-center px-[40px] border rounded-[30px] border-primary border-solid'>
                <span className='text-primary text-xl font-semibold'>로그인</span>
            </button>
            <button className='piseo-save-button flex w-fit h-[56px] items-center justify-center px-[40px] rounded-[30px] bg-primary'>
                <span className='text-white text-xl font-semibold'>저장</span>
                </button>
            <button className='piseo-save-button disabled flex w-fit h-[56px] items-center justify-center px-[40px] rounded-[30px] bg-light-grey-2 cursor-not-allowed'>
                <span className='text-white text-xl font-semibold'>저장</span>
            </button>
            <button className='piseo-write-button flex gap-1.5 items-center'>
                <div className='flex w-[48px] h-[48px] items-center justify-center'>
                    <Image src={IcWrite} alt='writing' />
                </div>
                <span className='text-primary text-2xl font-semibold'>글쓰기</span>
            </button>
            <div className='piseo-avartar flex w-[48px] h-[48px] items-center justify-center rounded-full bg-primary cursor-pointer'>
                <span className='dummy-text text-xl font-semibold text-[white]'>W</span>
            </div>
        </div>
    );
};

export default Header;