import Image from 'next/image';
import { IcSearch, IcCancel } from '@assets/icons';

type Props = {
	searchValue: string;
	handleInputKeyDown: (e: any) => void;
	handleInputChange: (e: any) => void;
	handleCancelIcon: () => void;
};

export const BookSearchInput = ({ searchValue, handleInputKeyDown, handleInputChange, handleCancelIcon }: Props) => {
	return (
		<div className="w-full rem:h-[80px] bg-light-grey-1 flex items-center rem:p-[30px]">
			<div className="w-full flex rem:gap-[8px] items-center">
				<Image src={IcSearch} alt="searchIcon" className="rem:w-[36px] rem:h-[36px]" />
				<input
					value={searchValue}
					className="w-full  bg-light-grey-1 text-s3_medium focus:outline-none"
					onKeyDown={handleInputKeyDown}
					onChange={handleInputChange}
					placeholder="도서명 / 저자 이름"
				/>
			</div>
			{Boolean(searchValue.length) && (
				<Image
					src={IcCancel}
					alt="cancelIcon"
					className="cursor-pointer rem:w-[36px] rem:h-[36px]"
					onClick={handleCancelIcon}
				/>
			)}
		</div>
	);
};
