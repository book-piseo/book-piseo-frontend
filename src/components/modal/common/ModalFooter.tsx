import RoundButton from '@components/elements/buttons/RoundButton';

export type Props = {
	onCancel: () => void;
	onConfirm: () => void;
};

export const ModalFooter = ({ onCancel, onConfirm }: Props) => {
	return (
		<div className="flex items-center rem:gap-[16px] justify-center rem:py-[20px]">
			<RoundButton type="secondary" label="취소" onClick={onCancel} />
			<RoundButton type="primary" label="확인" onClick={onConfirm} />
		</div>
	);
};
