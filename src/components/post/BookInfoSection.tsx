import { useModalStore, ModalType } from '@stores/useModalStore';
import { usePostStore } from '@stores/usePostStore';
import Image from 'next/image';

export const BookInfoSection = () => {
	const { changeModalState } = useModalStore();
	const { setPostStore } = usePostStore();
	const state = usePostStore();

	const hasBookInfo = Boolean(state.bookInfo.isbn.length);

	const { title, image, publisher, author } = state.bookInfo;

	return hasBookInfo ? (
		<div className="rem:h-[219px] rem:py-[28px] rem:px-[40px] bg-[#F3F4F8] rounded-[20px] flex justify-between">
			<div className="flex rem:gap-[40px]">
				<div className="rem:w-[105px] rem:h-[163px] relative">
					<Image src={image} alt="bookCover" fill unoptimized />
				</div>
				<div className="flex flex-col rem:gap-[20px] ">
					<div className="text-s1_semibold">{title}</div>
					<div className="flex flex-col rem:gap-[6px] text-p1_medium">
						<div>{author}</div>
						<div className="text-dark-grey-2">{publisher}</div>
					</div>
				</div>
			</div>
			<div
				className="text-[#EC7F7F] text-s3_medium cursor-pointer"
				onClick={() => {
					setPostStore({
						bookInfo: {
							title: '',
							link: '',
							image: '',
							author: '',
							discount: '',
							publisher: '',
							pubdate: '',
							isbn: '',
							description: '',
						},
					});
				}}
			>
				삭제
			</div>
		</div>
	) : (
		<div
			className="h-full rem:py-[50px] rem:px-[40px] items-center bg-light-grey-1 rounded-[20px] cursor-pointer"
			onClick={() => {
				changeModalState(ModalType.searchBook);
			}}
		>
			<div className="text-s1_semibold text-light-grey-2">+ 어떤 책을 읽었나요?</div>
		</div>
	);
};
