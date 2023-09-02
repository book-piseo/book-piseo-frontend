import React, { InputHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const InputConfig = {
  active: {
    borderColor: 'border-primary',
    bgColor: 'bg-white',
  },
  default: {
    borderColor: 'border-light-grey-2',
    bgColor: 'bg-light-grey-1',
  },
}

const Input = ({ type = 'text', name, id, value, onChange, placeholder }: InputProps) => {
  const configValue = value && value.toString().length > 0 ? 'active' : 'default'

  return (
    <div
      className={`flex items-center w-full h-[62px] py-[10px] px-[20px] rounded-[10px] border ${InputConfig[configValue].borderColor} ${InputConfig[configValue].bgColor} focus-within:border-primary focus-within:bg-white`}
    >
      <input
        type={type}
        id={id}
        className={`w-full border-none outline-none text-dark-grey-1 text-[16px] font-semibold focus:bg-white placeholder:text-light-grey-2 placeholder:text-[16px] placeholder:font-semibold ${InputConfig[configValue].bgColor}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
