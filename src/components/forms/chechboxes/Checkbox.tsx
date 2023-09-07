import { IcCheckbox, IcCheckboxActive } from '@assets/icons'
import Image from 'next/image'
import React from 'react'

type CheckboxProps = {
  id: string
  label: string
  checked: boolean
  disabled?: boolean
  onChange: () => void
}

const CheckboxConfig = {
  disabled: {
    divCss: 'cursor-not-allowed opacity-30',
    labelCss: 'cursor-not-allowed',
  },
  default: {
    divCss: 'cursor-pointer',
    labelCss: 'cursor-pointer',
  },
}

const Checkbox = ({ id, label, checked, disabled = false, onChange }: CheckboxProps) => {
  const config = disabled ? 'disabled' : 'default'
  return (
    <div className={`flex items-center gap-1 ${CheckboxConfig[config].divCss}`}>
      <Image src={checked ? IcCheckboxActive : IcCheckbox} alt="checkbox" />
      <input
        type="checkbox"
        id={`checkbox-${id}`}
        name={id}
        value={id}
        checked={checked}
        onChange={() => !disabled && onChange()}
        className="hidden"
      />
      <label
        htmlFor={`checkbox-${id}`}
        className={`text-dark-grey-2 text-[1rem] font-medium ${CheckboxConfig[config].labelCss}`}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
