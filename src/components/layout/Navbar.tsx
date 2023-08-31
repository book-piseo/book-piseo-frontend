'use client'
import React from 'react'
import Image from 'next/image'
import { IcAvatarLarge, IcWrite, LogoGnb } from '@assets/icons'
import Link from 'next/link'
import { useAuthStore } from '@/stores/useAuthStore'

const Navbar = () => {
  const { isLogin, setIsLogin } = useAuthStore()

  return (
    <div className="flex h-[104px] items-center justify-between px-72 bg-white border border-b-1 border-light-grey-2">
      <div className="">
        <Image src={LogoGnb} alt="logo" width={192} height={40} />
      </div>
      {!isLogin ? (
        <Link
          href="/"
          className="piseo-login-button flex w-fit h-[56px] items-center justify-center px-[40px] border rounded-[30px] border-primary border-solid"
        >
          <span className="text-primary text-xl font-semibold">로그인</span>
        </Link>
      ) : (
        <>
          {/* MARK :: SAVE BUTTON */}
          <button className="piseo-save-button flex w-fit h-[56px] items-center justify-center px-[40px] rounded-[30px] bg-primary">
            <span className="text-white text-xl font-semibold">저장</span>
          </button>

          {/* MARK :: SAVE BUTTON(DISBLAED) */}
          <button className="piseo-save-button disabled flex w-fit h-[56px] items-center justify-center px-[40px] rounded-[30px] bg-light-grey-2 cursor-not-allowed">
            <span className="text-white text-xl font-semibold">저장</span>
          </button>

          {/* MARK :: WRITING BUTTON */}
          <Link href="/post" className="piseo-write-button flex gap-1.5 items-center">
            <div className="flex w-[48px] h-[48px] items-center justify-center">
              <Image src={IcWrite} alt="writing" />
            </div>
            <span className="text-primary text-2xl font-semibold">글쓰기</span>
          </Link>

          {/* MARK :: AVATAR  */}
          <div className="cursor-pointer" onClick={() => setIsLogin(false)} title="로그아웃">
            <Image src={IcAvatarLarge} alt="empty profile image" />
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
