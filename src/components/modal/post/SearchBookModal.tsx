import { ModalType, useModalActions, useSearchBookState } from '@/stores/useModalStore';
import { BookInfo } from '@models/Content';
import { useEffect, useState } from 'react';
import { ModalContainer } from '../common/ModalContainer';
import { ModalHeader } from '../common/ModalHeader';
import { getNaverSearchList } from '@/api/getNaverSearchList';
import axios from "axios";
import {BookSearchInput} from "@components/elements/inputs/BookSearchInput";

export const SearchBookModal = () => {
	const [bookinfo, setBookInfo] = useState<Partial<BookInfo>>({});
	const isModalOpen = useSearchBookState();
	const changeModalState = useModalActions();
	const [searchValue, setSearchValue] = useState({ query: '' });


	const handleCloseModal = () => {
		changeModalState(ModalType.searchBook);
	};

	const getNaverBookList = async () => {
		try {
			{
				const response = await axios.get(`api/proxy/v1/search/book?query=${searchValue.query}`);
				setBookInfo(response.data.items);
			}
		} catch (e){
			console.error(e)
		}
	}

	const handleInputKeyUp = async (e) => {
		if (searchValue.query.trim() === ''){
			setBookInfo({});
		}
		if (e.key === 'Enter'){
			await getNaverBookList();
		}
	}

	const handleChangeInput = (e) => {
		setSearchValue({ query: e.target.value });
	}

	return (
		<ModalContainer isOpen={isModalOpen}>
			<ModalHeader title="도서 검색" onClose={handleCloseModal} />
			<div className="rem:w-[800px] rem:h-[790px] flex justify-center">
			<BookSearchInput handleInputKeyUp={handleInputKeyUp} handleChangeInput={handleChangeInput}/>
			</div>
		</ModalContainer>
	);
};
