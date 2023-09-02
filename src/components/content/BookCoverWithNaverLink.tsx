'use client';
import React from 'react';
import Image from 'next/image';
import NaverLogo from '../../../public/assets/images/img_NAVER-Logo-Green.png'
import { IcRightArrow } from '../../../public/assets/icons';


const BookCoverWithNaverLink = ({src, onClickLink}: {src: string, onClickLink: ()=> void}) => {
    return (
        <div className='rem:min-w-[275px]'>
            <Image className='w-full rem:h-[430px]' src={src} alt='bookCover'/>
            <div className='w-full rem:py-[14px] rem:pl-[20px] rem:pr-[10px] flex justify-between items-center bg-light-grey-1'>
            <div onClick={onClickLink} className='text-dark-grey-2 text-p1_medium' >
               도서 구매
            </div>
            <div className='flex gap-0 items-center'>
            <Image src={NaverLogo} className='w-[60px] h-[11.52px]' alt='naverLogo'/>
            <Image src={IcRightArrow} alt='rightArrow'/>
            </div>
            </div>
        </div>
    );
};

export default BookCoverWithNaverLink;
