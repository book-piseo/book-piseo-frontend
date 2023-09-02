import React from 'react'
import Image from 'next/image'
import { LogoFooter } from '@assets/icons'

const Footer = () => {
  return (
    <div className="flex items-center w-full h-[238px] px-[120px] bg-primary-sub">
      <div className="flex flex-col flex-1">
        <div className="pb-[37px]">
          <Image src={LogoFooter} alt="logo" width={144} height={30} />
        </div>
        <div className="w-full h-px bg-light-grey-2"></div>
        <div className="flex pt-[30px] justify-between">
          <div className="text-dark-grey-1 text-[18px] font-medium">ABOUT 책을 피서</div>
          <div className="text-[#666] text-[18px] font-medium">@Copyright book-piseo. All rights reserved.</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
