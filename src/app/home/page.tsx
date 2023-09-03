import React from 'react';
import Image from 'next/image';
import { IcArrowUpLight, IcBook, IcOtherReadBook, IcRightArrow, IcTeamHistoryCheck } from '@assets/icons';
import BookReview from '@components/home/BookReview';
import { ImgBookCoverExample } from '@assets/images';
import { LinkButton } from '@components/elements/buttons/LinkButton';
import AvatarProfile from '@components/common/AvatarProfile';

function HomePage() {
	return (
		<>
			<div className="grid grid-cols-[18.13rem_1fr_18.13rem] items-center justify-center rem:pt-[50px] rem:pb-[20px]">
				<div className="flex justify-center">
					<div className="flex items-center justify-center rem:w-[100px] rem:h-[100px] m-[5px] border rounded-full border-dark-grey-2 cursor-pointer">
						<Image src={IcRightArrow} alt="왼쪽으로" className="rem:w-[48px] rem:h-[48px] rotate-180" />
					</div>
				</div>
				<div className="flex flex-col h-fit rem:pt-[30px] rem:px-[75px] rem:gap-[16px] bg-primary-sub rounded-[30px]">
					<div className="flex justify-between">
						<div className="flex items-center rem:gap-[8px]">
							<Image
								src={IcTeamHistoryCheck}
								alt="팀원이 남긴 독서 기록을 지금 확인해보세요"
								className="rem:w-[48px] rem:h-[48px]"
							/>
							<span className="text-s3_medium text-dark-grey-1">팀원이 남긴 독서 기록을 지금 확인해보세요!</span>
						</div>
						<div className="flex items-center justify-center rem:py-[8px] rem:px-[24px] border bg-white rounded-[30px] border-secondary">
							<span className="text-p1_semibold text-primary">1/5</span>
						</div>
					</div>
					<div className="grid grid-cols-[19.0625rem_1fr] rem:gap-[80px]">
						<Image
							src={ImgBookCoverExample}
							alt="예시 책 이미지"
							className="rem:w-[305px] rem:h-[270px] rounded-[30px_30px_0_0] object-cover object-top "
						/>

						<div className="flex flex-col rem:h-[230px] justify-between">
							<div className="flex flex-col rem:gap-[30px]">
								<div className="flex items-center justify-between">
									<div className="rem:px-[12px] border-l-[4px] border-dark-grey-1 text-dark-grey-1 text-s3_medium rem:leading-[22px]">
										책을 피서 운영팀
									</div>
									<LinkButton pathUrl="/team" className="flex items-center rem:gap-[6rem]">
										<span>전체 보기</span>
										<Image src={IcArrowUpLight} alt="전체 보기" className="rem:w-[22px] rem:h-[22px]" />
									</LinkButton>
								</div>
								<div className="flex flex-col rem:gap-[14px]">
									<div className="text-dark-grey-1 text-s1_semibold text-ellipsis-line-2 rem:leading-[28px]">
										마지막 문장이 제일 압권! 먼 미래를 내다본 천재 조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만
										표기합니다먼 미래를 내다본 천재 조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만 표기합니다먼
										미래를 내다본 천재 조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만 표기합니다먼 미래를 내다본 천재
										조지 오웰 어쩌구 저쩌구 게시물 제목은 두 줄까지만 표기합니다
									</div>

									<div className="flex items-center rem:gap-[10px] text-dark-grey-2 text-p1_regular">
										<AvatarProfile
											avatarSize="medium"
											userInfo={{ userId: '1231231', userName: '작성자 이름', userImgUrl: '' }}
											labelStyle="text-dark-grey-2 text-p1_regular"
										/>
										<span>|</span>
										<span>YYYY.MM.DD</span>
									</div>
								</div>
							</div>
							<div className="flex w-[80%] items-center rem:p-[10px] rem:gap-[8px] bg-white rounded-[4px]">
								<Image src={IcBook} alt="책제목" className="rem:w-[24px] rem:h-[24px]" />
								<p className="text-ellipsis text-dark-grey-1 text-p1_semibold">
									책 이름은 한 줄까지만책 책 이름은 한 줄까지만책 책 이름은 한 줄까지만책 이름은 한 줄까지만책 이름은 한
									줄까지만책 이름은 한 줄까지만 한줄까지
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="flex items-center justify-center rem:w-[100px] rem:h-[100px] m-[5px] border rounded-full border-dark-grey-2 cursor-pointer">
						<Image src={IcRightArrow} alt="오른쪽으로" className="rem:w-[48px] rem:h-[48px]" />
					</div>
				</div>
			</div>

			<div className="grid rem:gap-y-[34px] rem:mx-[290px] rem:pt-[70px]">
				<div className="flex items-center rem:gap-[8px]">
					<Image src={IcOtherReadBook} alt="other team read a book" className="rem:w-[48px] rem:h-[48px]" />
					<p className="text-s2_medium">다른 피서인은 이런 책을 읽었어요!</p>
				</div>
				{/* 리뷰 리스트 */}
				<BookReview />
			</div>
		</>
	);
}

export default HomePage;
