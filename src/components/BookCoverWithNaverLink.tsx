'use client';
import React from 'react';
import Image from 'next/image';
import NaverLogo from '../../public/assets/images/img_NAVER-Logo-Green.png'


const BookCoverWithNaverLink = ({src, onClickLink}: {src: string, onClickLink: ()=> void}) => {
    return (
        <div className='min-w-[275px]'>
            <Image className='w-full h-[430px]' src={src} alt=''/>
            <div className='w-full py-[14px] pl-[20px] pr-[10px] flex justify-between items-center bg-light-grey-1'>
            <div onClick={onClickLink} >
               도서 구매
            </div>
            <Image src={NaverLogo} className='w-[60px] h-[11.52px]' alt=''/>
            </div>
        </div>
    );
};

export default BookCoverWithNaverLink;
