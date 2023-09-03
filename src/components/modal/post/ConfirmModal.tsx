import { ModalType, useModalActions, usePostConfirmState } from '@/stores/useModalStore';
import { ModalContainer } from '../common/ModalContainer';
import { ModalContent } from '../common/ModalContent';
import { ModalFooter } from '../common/ModalFooter';
import { ModalHeader } from '../common/ModalHeader';

export const ConfirmModal = () => {
	const isModalOpen = usePostConfirmState();
	const changeModalState = useModalActions();

	const handleCloseModal = () => {
		changeModalState(ModalType.postConfirm);
	};

	return (
		<ModalContainer isOpen={isModalOpen}>
			<ModalHeader onClose={handleCloseModal} />
			<ModalContent>
				<div className="rem:w-[600px] text-center">
					<span className="text-s1_medium text-dark-grey-1">작성한 내용을 게시하시겠습니까?</span>
				</div>
			</ModalContent>
			<ModalFooter onCancel={handleCloseModal} onConfirm={() => {}} />
		</ModalContainer>
	);
};
