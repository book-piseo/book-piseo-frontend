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

const LoginButton = ({ label = '로그인', width, height, disabled, onClick }: ButtonProps) => {
  const config = disabled ? 'disabled' : 'active'
  return (
    <div
      className={`flex items-center justify-center w-full h-[3.875rem] py-[0.625rem] px-[1.25rem] rounded-[0.625rem] ${LoginButtonConfig[config]}`}
      onClick={onClick}
    >
      <span className="text-white text-[1rem] font-semibold">{label}</span>
    </div>
  )
}

export default LoginButton
