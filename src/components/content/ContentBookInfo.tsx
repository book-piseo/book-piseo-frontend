import BookCoverWithNaverLink from './BookCoverWithNaverLink'
import DummyBookCoverImage from '../../../public/assets/images/img_book-cover-example.png'

export const ContentBookInfo = () => {
	return (
		<div className="flex rem:gap-[40px] w-[full]">
			{/* 책 표지 */}
			<BookCoverWithNaverLink src={DummyBookCoverImage} onClickLink={() => {}} />
			{/* 책 설명  */}
			<div className="flex flex-col justify-between w-full rem:h-[430px]">
				<div className="flex flex-col rem:gap-[24px]">
					<div className="w-full text-h1_bold">
						일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십일이삼사오육칠팔구십
					</div>
					<div className="text-p1_regular text-dark-grey-2">책을 피서 운영자 | YYYY.MM.DD</div>
				</div>

				<div className="bg-primary-sub w-[full] rem:py-[24px] rem:pr-[40px] rem:pl-[30px] rounded-[10px]">
					<div className="text-s1_semibold">1984</div>
					<div className="flex rem:gap-[10px] text-s3_medium text-dark-grey-1">
						<span>저자</span>
						<span>조지 오웰</span>
						<span>・</span>
						<span>번역</span>
						<span>김승욱</span>
					</div>
					<div className="text-dark-grey-2 text-s3_medium">문예 출판사</div>
				</div>
			</div>
		</div>
	)
}
