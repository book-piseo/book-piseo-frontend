'use client'
import { useAuthStore } from '@/stores/useAuthStore'
import Navbar from '@components/layout/Navbar'
import useStore from '@hooks/useStore'

export default function RootPage({ children }: { children: React.ReactNode }) {
  // MARK :: zustand persist 적용 시, Error 발생
  const store = useStore(useAuthStore, (state) => state)
  console.log({ store })

  return (
    <div className="w-screen h-full">
      {store?.isLogin && <Navbar />}
      <main>{children}</main>
    </div>
  )
}
