'use client'
import { useAuthStore } from '@/stores/useAuthStore'
import { Logo } from '@assets/icons'
import LinkButton from '@components/elements/buttons/LinkButton'
import LoginButton from '@components/elements/buttons/LoginButton'
import Checkbox from '@components/forms/chechboxes/Checkbox'
import Input from '@components/forms/inputGroups/Input'
import Image from 'next/image'
import React, { useState } from 'react'

const Login = () => {
  // zustand 적용
  const { id, pwd, autoLogin, setId, setPwd, setAutoLogin, setIsLogin } = useAuthStore()

  return (
    <div className="flex w-screen h-screen flex-col items-center justify-center">
      <div className="w-[36.875rem]">
        <div className="logo flex items-center justify-center pb-[4rem] ">
          <Image src={Logo} alt="logo" width={170} height={35} />
        </div>

        <div className="grid gap-5 pb-[38px]">
          <Input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
          <Input type="password" placeholder="비밀번호" value={pwd} onChange={(e) => setPwd(e.target.value)} />
          <div className="flex items-center">
            <Checkbox
              id="autoLogin"
              label="자동 로그인"
              checked={autoLogin}
              onChange={() => setAutoLogin(!autoLogin)}
            />
          </div>
        </div>

        <LoginButton
          disabled={id.length === 0 || pwd.length === 0}
          onClick={() => {
            setIsLogin(true)
          }}
        />

        <div className="flex items-center justify-center gap-[1.25rem] pt-[1.87rem]">
          <LinkButton pathUrl="">아이디 찾기</LinkButton>
          <span className="text-dark-grey-2 text-[0.875rem] font-medium">|</span>
          <LinkButton pathUrl="">비밀번호 찾기</LinkButton>
          <span className="text-dark-grey-2 text-[0.875rem] font-medium">|</span>
          <LinkButton pathUrl="">회원가입</LinkButton>
        </div>
      </div>
    </div>
  )
}

export default Login
