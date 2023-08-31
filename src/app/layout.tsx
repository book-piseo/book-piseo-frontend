
import Basic from '@/components/layout/Basic'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'book-piseo',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <link rel="stylesheet" as="style" crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
          // @ts-ignore
          precedence="default"/>
      <body className=''>
        <Basic>{children}</Basic>
      </body>
    </html>
  )
}
