import './globals.css'
import type { Metadata } from 'next'
import RootPage from './page'

export const metadata: Metadata = {
  title: 'book-piseo',
  description: '',
}

// MARK :: RootLayout은 서버 -> 클라이언트 컴포넌트가 될 수 없음
export default function RootLayout({ children }: { children: React.ReactNode }) {
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
      <body className="">
        <RootPage>{children}</RootPage>
      </body>
    </html>
  )
}
