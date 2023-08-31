'use client'
import Basic from '@components/layout/Basic'
import './globals.css'
import type { Metadata } from 'next'
import Login from '@components/layout/Login'
import { useAuthStore } from '@/stores/useAuthStore'

export const metadata: Metadata = {
  title: 'book-piseo',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isLogin } = useAuthStore()

  return (
    <html lang="en">
      <link
        rel="stylesheet"
        as="style"
        crossOrigin=""
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
        // @ts-ignore
        precedence="default"
      />
      <body className="">{!isLogin ? <Login /> : <Basic>{children}</Basic>}</body>
    </html>
  )
}
