import React from 'react'
import Image from 'next/image'
import { IcWrite } from '@assets/icons'

type IconButtonProps = {
  icon: string
  label: string
  alt?: string
  /**
   * @param pixel - ex. '18px'
   */
  fontSize?: string
  /**
   * @param HexCode - ex. '#333'
   */
  fontColor?: string
}

export const IconButton = ({ icon, alt, label, fontSize = '16px', fontColor = '#333' }: IconButtonProps) => {
  return (
    <div className="flex w-fit h-[48px] items-center gap-[4px] rounded-[10px] bg-primary-sub pl-[16px] pr-[20px]">
      <Image src={icon} alt={alt || label} />
      <span className={`text-[${fontColor}] text-[${fontSize}] font-semibold`}>{label}</span>
    </div>
  )
}
