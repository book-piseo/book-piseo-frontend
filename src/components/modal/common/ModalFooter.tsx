import { useModalStore } from '@/stores/useModalStore'
import RoundButton from '@components/elements/buttons/RoundButton'

export type Props = {
	onConfirm: () => void
}

export const ModalFooter = ({ onConfirm }: Props) => {
	const { closeModal } = useModalStore()
	return (
		<div className="flex items-center rem:gap-[16px] justify-center rem:py-[20px]">
			<RoundButton type="secondary" label="취소" onClick={closeModal} />
			<RoundButton type="primary" label="확인" onClick={onConfirm} />
		</div>
	)
}
