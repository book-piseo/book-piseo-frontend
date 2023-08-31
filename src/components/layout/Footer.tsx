
import React from 'react';
import Image from 'next/image';
import { LogoFooter } from '@assets/icons';


const Footer = () => {
    return (
        <div className='flex items-center w-full h-[300px] px-[290px] bg-primary-sub'>
            <div className='flex flex-col flex-1'>
                <div className='pb-10'>
                    <Image src={LogoFooter} alt='logo' width={192} height={40}/>
                </div>
                <div className='w-full h-px bg-light-grey-2'></div>
                <div className='flex pt-[30px] justify-between'>
                    <div className='text-2xl font-medium'>ABOUT 책을 피서</div>
                    <div className='text-[#666] text-2xl font-medium'>@Copyright  book-piseo. All rights reserved.</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;