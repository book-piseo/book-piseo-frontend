'use client';
import { ModalType, useModalActions, useSearchBookState } from '@/stores/useModalStore';
import { BookInfo } from '@/types/Content';
import { useState } from 'react';
import { ModalContainer } from '../common/ModalContainer';
import { ModalHeader } from '../common/ModalHeader';
import { BookSearchInput } from '@components/elements/inputs/BookSearchInput';
import { getNaverBookList } from '@apis/postApi';
import { ImgEmptyBookForModal, ImgNoResult, ImgSearchResult } from '@assets/images';
import Image from 'next/image';
import { useSetPostStore } from '@stores/usePostStore';

export const SearchBookModal = () => {
	const [resultBookList, setResultBookList] = useState<BookInfo[]>([]);
	const [searchValue, setSearchValue] = useState<string>('');
	const [isSearched, setIsSearched] = useState<boolean>(false); //검색여부

	const isModalOpen = useSearchBookState();
	const changeModalState = useModalActions();
	const setPostState = useSetPostStore();

	/**
	 * 검색 결과 list 초기화
	 */
	const clearResultBookList = () => {
		setResultBookList([]);
	};

	/**
	 * 검색값 초기화
	 */
	const clearSearchValue = () => {
		setSearchValue('');
	};

	/**
	 * 모달 close 및 검색 결과 list, 검색값 초기화
	 */
	const handleCloseModal = () => {
		changeModalState(ModalType.searchBook);
		clearResultBookList();
		clearSearchValue();
	};

	/**
	 * enter key 입력으로 검색
	 */
	const handleInputKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.nativeEvent.isComposing) return; //한글 입력시 event 두 번 호출되는 사항 방지
		if (searchValue.trim() === '') {
			clearResultBookList();
		}
		if (e.key === 'Enter') {
			const query = encodeURIComponent(e.currentTarget.value);
			const res = await getNaverBookList(query);
			res && setResultBookList(res.items);
			setIsSearched(true);
		}
	};

	/**
	 * input 값 변경 handler
	 */
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (isSearched) {
			setIsSearched(false);
		}
		setSearchValue(e.target.value);
	};

	/**
	 * input 내부 취소 아이콘 handler
	 */
	const handleCancelIcon = () => {
		clearSearchValue();
		clearResultBookList();
	};

	const renderListSection = () => {
		//  검색 전
		if (!isSearched) {
			return (
				<div className="flex justify-center items-center w-full h-full ">
					<div className="flex flex-col text-center rem:gap-[24px]">
						<Image src={ImgSearchResult} alt="searchImage" className="rem:w-[175px] rem:h-[175px]" />
						<div className="text-s3_medium text-dark-grey-2">어떤 책을 읽었나요?</div>
					</div>
				</div>
			);
		}

		// 검색 결과
		return resultBookList.length ? (
			<div className="flex flex-col rem:px-[65px] rem:py-[40px] overflow-y-scroll rem:gap-[28px]">
				{resultBookList.map((info) => (
					<div
						key={info.isbn}
						className="flex w-full h-full rem:gap-[40px] cursor-pointer"
						onClick={() => {
							setPostState({ bookInfo: info });
							handleCloseModal();
						}}
					>
						{/* 책 표지 */}
						<div className="relative rem:w-[105px] rem:h-[163px]">
							<Image fill unoptimized src={info.image ? info.image : ImgEmptyBookForModal} alt="cover" />
						</div>
						<div className="flex flex-col rem:gap-[20px]">
							<div className="text-s2_semibold">{info.title}</div>
							<div className="text-p1_medium flex flex-col gap-0">
								<div className="text-dark-grey-1">{info.author}</div>
								<div className="text-dark-grey-2">{info.publisher}</div>
							</div>
						</div>
					</div>
				))}
			</div>
		) : (
			<div className="flex justify-center items-center w-full h-full ">
				<div className="flex flex-col text-center rem:gap-[24px]">
					<Image src={ImgNoResult} alt="searchImage" className="rem:w-[175px] rem:h-[175px]" />
					<div className="text-s3_medium text-dark-grey-2">
						책을 찾을 수 없어요. <br />
						키워드를 바꿔 검색해보세요.
					</div>
				</div>
			</div>
		);
	};

	return (
		<ModalContainer isOpen={isModalOpen}>
			<ModalHeader title="도서 검색" onClose={handleCloseModal} />

			<div className="rem:w-[800px] rem:h-[790px] flex flex-col">
				{/* input */}
				<BookSearchInput
					searchValue={searchValue}
					handleInputKeyDown={handleInputKeyDown}
					handleInputChange={handleInputChange}
					handleCancelIcon={handleCancelIcon}
				/>
				{/* list */}
				{renderListSection()}
			</div>
		</ModalContainer>
	);
};
