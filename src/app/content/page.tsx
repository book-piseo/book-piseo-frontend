'use client'
import React from 'react'
import { PostedBookInfo } from '@/components/content/PostedBookInfo'

const Page = () => {
	return (
		<div className="pt-[120px] mb-[170px] px-[350px] h-full">
			{/* path */}
			<div className="flex gap-[6px] mb-[32px] ">
				<div className="text-[20px] text-secondary">책을 피서 운영팀</div>
				<div className="text-[20px] text-dark-grey-2 font-semibold">{'>'}</div>
				<div className="text-[20px] text-dark-grey-2 font-semibold">
					독서 기록
				</div>
			</div>
			{/* 책 정보 */}
			<PostedBookInfo />
			{/* 포스팅 내용 */}
			<div className='mt-[100px] text-[24px] text-dark-grey-1 font-normal'>
				조지 오웰은 천재인듯하다. 조지 오웰은 천재인듯하다.조지 오웰은
				천재인듯하다.조지 오웰은 천재인듯하다. 조지 오웰은 천재인듯하다.조지
				오웰은 천재인듯하다.조지 오웰은 천재인듯하다.조지 오웰은 천재인듯하다.
				조지 오웰은 천재인듯하다.조지 오웰은 천재인듯하다.조지 오웰은
				천재인듯하다.조지 오웰은 천재인듯하다. 조지 오웰은 천재인듯하다.조지
				오웰은 천재인듯하다.조지 오웰은 천재인듯하다.조지 오웰은
				천재인듯하다.조지 오웰은 천재인듯하다.
                <br/>
                <br/>
                조지 오웰은 천재인듯하다. 조지 오웰은 천재인듯하다.조지 오웰은
				천재인듯하다.조지 오웰은 천재인듯하다. 조지 오웰은 천재인듯하다.조지
				오웰은 천재인듯하다.조지 오웰은 천재인듯하다.조지 오웰은 천재인듯하다.
				조지 오웰은 천재인듯하다.조지 오웰은 천재인듯하다.조지 오웰은
				천재인듯하다.조지 오웰은 천재인듯하다. 조지 오웰은 천재인듯하다.조지
				오웰은 천재인듯하다.조지 오웰은 천재인듯하다.조지 오웰은
				천재인듯하다.조지 오웰은 천재인듯하다.
			</div>
		</div>
	)
}
export default Page
