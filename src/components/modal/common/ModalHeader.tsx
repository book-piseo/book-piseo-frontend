import Image from 'next/image';
import { IcClose } from '@assets/icons';

export const ModalHeader = ({ title, onClose }: { title?: string; onClose: () => void }) => {
	return (
		<div className={`flex rem:h-[80px] ${title ? 'justify-between' : 'justify-end'} items-center rem:px-[30px]`}>
			{title && <div className="text-s2_medium text-dark-grey-1">{title}</div>}
			<Image src={IcClose} alt="closeButton" onClick={onClose} className="cursor-pointer" />
		</div>
	);
};
