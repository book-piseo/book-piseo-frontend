import { ImgBookCoverExample } from '@assets/images';
import React from 'react';
import Image from 'next/image';
import AvatarProfile from '@components/common/AvatarProfile';
import { LinkButton } from '@components/elements/buttons/LinkButton';
import { IcBook } from '@assets/icons';

const TeamBookReviewItem = () => {
	return (
		<div className="flex space-x-[2.5rem] rem:py-[40px]">
			<Image src={ImgBookCoverExample} alt="책 커버 이미지" className="flex-1 rem:max-w-[170px]" />

			<div className="flex w-[calc(100%-170px)] flex-col justify-between rem:gap-[20px]">
				<div className="flex items-center rem:gap-[10px] text-dark-grey-2 text-p1_regular">
					<AvatarProfile
						avatarSize="medium"
						userInfo={{ userId: '1231231', userName: '작성자 이름', userImgUrl: '' }}
						labelStyle="text-dark-grey-2 text-p1_regular"
					/>
					<span>|</span>
					<span>YYYY.MM.DD</span>
				</div>

				<div className="flex flex-col rem:gap-[30px]">
					<div className="flex flex-col rem:gap-[10px]">
						<h2 className="review-title text-dark-grey-1 text-s1_semibold text-ellipsis-line-2 rem:leading-[28px]">
							마지막 문장이 제일 압권! 먼 미래를 내다본 천재 조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만
							표기합니다먼 미래를 내다본 천재 조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만 표기합니다먼 미래를
							내다본 천재 조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만 표기합니다먼 미래를 내다본 천재 조지 오웰
							어쩌구 저쩌구 게시물 제목은 두 줄까지만 표기합니다
						</h2>
						<p className="text-p1_regular text-ellipsis-line-3">
							조지오웰은 천재인듯하다.조지오웰은 천재인듯하다.조지오웰은 천재인듯하다.조지오웰은 천재인듯하다.조지오웰은
							천재인듯하다.조지오웰은 천재인듯하다.조지오웰은 천재인듯하다.조지오웰은 천재인듯하다.조지오웰은
							천재인듯하다.조지오웰은 천재인듯하다.
							세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지만세줄까지
						</p>
					</div>
				</div>
				<div className="flex max-w-[80%] items-center rem:p-[10px] rem:gap-[8px] bg-primary-sub rounded-[4px]">
					<Image src={IcBook} alt="책제목" className="rem:w-[24px] rem:h-[24px]" />
					<p className="text-ellipsis-line-1 text-dark-grey-1 text-p1_semibold">
						책 이름은 한 줄까지만책 책 이름은 한 줄까지만책 책 이름은 한 줄까지만책 이름은 한 줄까지만책 이름은 한
						줄까지만책 이름은 한 줄까지만 한줄까지
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeamBookReviewItem;
