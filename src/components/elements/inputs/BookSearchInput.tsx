type Props = {
	handleInputKeyUp: (e: any) => void;
	handleInputChange: (e: any) => void;
};

export const BookSearchInput = ({ handleInputKeyUp, handleInputChange }: Props) => {
	return (
		<div className="w-full rem:h-[80px] bg-light-grey-1 flex items-center rem:px-[30px]">
			{/* <Image /> */}
			<input
				className="w-full  bg-light-grey-1 text-s3_medium focus:outline-none"
				onKeyUp={handleInputKeyUp}
				onChange={handleInputChange}
			/>
			{/* <Image /> */}
		</div>
	);
};
