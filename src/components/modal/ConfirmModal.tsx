import { ModalType, useModalStore } from '@/stores/useModalStore'
import { ModalContainer } from './common/ModalContainer'
import { ModalContent } from './common/ModalContent'
import { ModalFooter } from './common/ModalFooter'
import { ModalHeader } from './common/ModalHeader'

export const ConfirmModal = () => {
	const { postConfirm, changeModalState } = useModalStore()

	return postConfirm ? (
		<ModalContainer>
			<ModalHeader
				onClose={() => {
					changeModalState(ModalType.postConfirm)
				}}
			/>
			<ModalContent>
				<div className="rem:w-[600px] text-center">
					<span className="text-s1_medium text-dark-grey-1">작성한 내용을 게시하시겠습니까?</span>
				</div>
			</ModalContent>
			<ModalFooter onConfirm={() => {}} />
		</ModalContainer>
	) : null
}
