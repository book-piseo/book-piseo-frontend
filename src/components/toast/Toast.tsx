import Image from 'next/image';
import { IcSmile } from '@assets/icons';

export const Toast = ({ text }: { text: string }) => {
	return (
		<div className="bg-[rgba(53,66,191,0.90)] rem:min-w-[500px] flex rem:rounded-[20px] rem:gap-[10px] rem:px-[40px] rem:py-[20px] items-center ">
			<Image src={IcSmile} alt="smile" />
			<span className="text-s3_medium text-white">{text}</span>
		</div>
	);
};
