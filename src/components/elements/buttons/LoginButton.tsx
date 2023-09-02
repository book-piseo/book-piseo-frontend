import React from 'react'

type ButtonProps = {
  label?: string
  width?: string
  height?: string
  disabled: boolean
  onClick: () => void
}

const LoginButtonConfig = {
  disabled: 'bg-light-grey-2 cursor-not-allowed',
  active: 'bg-primary cursor-pointer',
}

export const LoginButton = ({ label = '로그인', width, height, disabled, onClick }: ButtonProps) => {
  const config = disabled ? 'disabled' : 'active'
  return (
    <div
      className={`flex items-center justify-center w-full h-[62px] py-[10px] px-[20px] rounded-[10px] ${LoginButtonConfig[config]}`}
      onClick={onClick}
    >
      <span className="text-white text-[1rem] font-semibold">{label}</span>
    </div>
  )
}
