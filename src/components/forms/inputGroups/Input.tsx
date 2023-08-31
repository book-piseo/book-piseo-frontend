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
      className={`flex items-center w-[36.875rem] h-[3.875rem] py-[0.625rem] px-[1.25rem] rounded-[0.625rem] border ${InputConfig[configValue].borderColor} ${InputConfig[configValue].bgColor} focus-within:border-primary focus-within:bg-white`}
    >
      <input
        type={type}
        id={id}
        className={`w-full border-none outline-none text-dark-grey-1 font-semibold focus:bg-white placeholder:text-light-grey-2 placeholder:font-semibold ${InputConfig[configValue].bgColor}`}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
