import { ModalType, useModalActions, useSearchBookState } from '@/stores/useModalStore';
import { BookInfo } from '@models/Content';
import { useEffect, useState } from 'react';
import { ModalContainer } from '../common/ModalContainer';
import { ModalContent } from '../common/ModalContent';
import { ModalHeader } from '../common/ModalHeader';
import { useGetNaverSearchList } from '@/api/query/useGetNaverBookData';
import { getNaverSearchList } from '@/api/getNaverSearchList';

export const SearchBookModal = () => {
	const [bookinfo, setBookInfo] = useState<Partial<BookInfo>>({});
	const isModalOpen = useSearchBookState();
	const changeModalState = useModalActions();
	const [searchValue, setSearchValue] = useState({ query: '' });

	useEffect(() => {
		getNaverSearchList(searchValue);
	}, [searchValue]);

	const handleCloseModal = () => {
		changeModalState(ModalType.searchBook);
	};
	return (
		<ModalContainer isOpen={isModalOpen}>
			<ModalHeader title="도서 검색" onClose={handleCloseModal} />
			<div className="rem:w-[800px] rem:h-[790px] flex justify-center">
				<div className="w-full rem:h-[80px] bg-light-grey-1 flex items-center rem:px-[30px]">
					<input
						className="w-full  bg-light-grey-1 text-s3_medium focus:outline-none"
						onChange={(e) => {
							setSearchValue({ query: e.target.value });
						}}
					/>
				</div>
			</div>
		</ModalContainer>
	);
};
