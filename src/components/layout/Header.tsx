'use client'
import React from 'react'
import Image from 'next/image'
import { IcAvatarLarge, IcWrite, LogoGnb } from '@assets/icons'
import Link from 'next/link'
import { useAuthStore } from '@/stores/useAuthStore'
import useStore from '@hooks/useStore'
import { IconButton } from '@components/elements/buttons/IconButton'
import RoundButton from '@components/elements/buttons/RoundButton'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const store = useStore(useAuthStore, (state) => state)
  const router = useRouter()

  if (!store) return <></>

  return (
    <header className="flex h-[80px] items-center justify-between px-[120px] bg-white">
      <div className="">
        <Image src={LogoGnb} alt="logo" width={144} height={30} />
      </div>
      <div className="flex items-center gap-[40px]">
        {!store.isLogin ? (
          <Link href="/signin">
            <RoundButton label="로그인" />
          </Link>
        ) : (
          <>
            {/* MARK :: SAVE BUTTON */}
            <RoundButton
              label="저장"
              disabled={false}
              onClick={() => {
                alert('확인')
              }}
            />

            {/* MARK :: SAVE BUTTON(DISBLAED) */}
            <RoundButton
              label="저장"
              disabled={true}
              onClick={() => {
                alert('확인')
              }}
            />

            {/* MARK :: WRITING BUTTON */}
            <Link href="/post">
              <IconButton icon={IcWrite} label="글쓰기" />
            </Link>

            {/* MARK :: AVATAR  */}
            <div
              className="cursor-pointer"
              onClick={() => {
                store.setIsLogin(false)
                router.push('/signin')
              }}
              title="로그아웃"
            >
              <Image src={IcAvatarLarge} alt="empty profile image" width={42} height={42} />
            </div>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
