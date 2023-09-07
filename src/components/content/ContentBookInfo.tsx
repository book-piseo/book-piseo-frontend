'use client';
import Avatar from '@components/elements/avatars/Avatar';
import BookCoverWithNaverLink from './BookCoverWithNaverLink';
import { ContentsInfoResponse } from '@models/contents.model';

export const ContentBookInfo = ({ content }: { content: Partial<ContentsInfoResponse> }) => {
	const { bookInfo } = content;

	const getRegDt = (content: Partial<ContentsInfoResponse>) => {
		if (content && content.regDt) {
			return content.regDt.substring(0, content.regDt.indexOf('T'));
		}
		return '';
	};

	return (
		<div className="flex rem:gap-[40px] w-full">
			{/* 책 표지 */}
			<BookCoverWithNaverLink src={bookInfo?.image || ''} link={bookInfo?.link || ''} />
			{/* 책 설명  */}
			<div className="flex flex-col justify-between w-full rem:h-[430px]">
				<div className="flex flex-col rem:gap-[24px]">
					<div className="w-full text-h1_bold text-ellipsis-line-3 ">{content.contentsTitle}</div>
					<div className="flex items-center text-p1_regular text-dark-grey-2 rem:gap-[14px]">
						<Avatar path={content.writerInfo?.profileImg || ''} />
						<span>{content.writerInfo?.userName}</span>
						<span>|</span>
						<span> {getRegDt(content)}</span>
					</div>
				</div>

				<div className="bg-primary-sub w-full rem:py-[24px] rem:pr-[40px] rem:pl-[30px] rounded-[10px]">
					<div className="text-s1_semibold">{bookInfo?.title}</div>
					<div className="flex rem:gap-[10px] text-s3_medium text-dark-grey-1 text-ellipsis-line-1">
						<span>저자</span>
						<span>{bookInfo?.author}</span>
					</div>
					<div className="text-dark-grey-2 text-s3_medium">{bookInfo?.publisher}</div>
				</div>
			</div>
		</div>
	);
};
