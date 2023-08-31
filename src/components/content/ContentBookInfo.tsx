import BookCoverWithNaverLink from "./BookCoverWithNaverLink"

export const ContentBookInfo = () => {
    return(
        <div className='flex gap-[40px] w-[full]'>
        {/* 책 표지 */}
        <BookCoverWithNaverLink src={''} onClickLink={()=>{}}/>
        {/* 책 설명  */}
        <div className='flex flex-col justify-between h-[430px]'>
        <div className='flex flex-col gap-[24px]'>
            <div className='w-[full] max-w-[905px] text-[40px] font-bold'>
                일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
            </div>
            <div className='text-[20px] font-normal text-dark-grey-2'>
            책을 피서 운영자 | YYYY.MM.DD
            </div>
        </div>

        <div className='bg-primary-sub w-[full] h-[146px] py-[24px] px-[30px] rounded-[10px]'>
            <div className="text-[30px] font-bold">
                1984
            </div>
            <div className="flex gap-[10px] text-[20px] font-medium text-dark-grey-1">
                <span>저자</span>
                <span>조지 오웰</span>
                <span>・</span>
                <span>번역</span>
                <span>김승욱</span>
            </div>
            <div className="text-dark-grey-2 text-[20px] font-medium">
                문예 출판사
            </div>
        </div>
        </div>
        </div>
    )
}