import Link from 'next/link'
import React from 'react'

type LinkButtonProps = {
  children: React.ReactNode
  pathUrl: string
}

export const LinkButton = ({ children, pathUrl }: LinkButtonProps) => {
  return (
    <Link href={pathUrl} className="text-dark-grey-2 text-[0.875rem] font-medium">
      {children}
    </Link>
  )
}
