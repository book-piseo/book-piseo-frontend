'use client';
import { ModalType, useModalActions, usePostConfirmState } from '@/stores/useModalStore';
import { ModalContainer } from '../common/ModalContainer';
import { ModalContent } from '../common/ModalContent';
import { ModalFooter } from '../common/ModalFooter';
import { ModalHeader } from '../common/ModalHeader';
import { postContent } from '@apis/postApi';
import { PostStore, usePostStore } from '@stores/usePostStore';
import { ToastType, useToastActions } from '@stores/useToastStore';

export const ConfirmModal = () => {
	const isModalOpen = usePostConfirmState();
	const changeModalState = useModalActions();
	const postStore = usePostStore();
	const setToastState = useToastActions();

	const handleCloseModal = () => {
		changeModalState(ModalType.postConfirm);
	};

	const handleToast = () => {
		setToastState(ToastType.postCompleted);
		let timer = setTimeout(() => {
			setToastState(ToastType.postCompleted);
		}, 1500);
		return () => {
			clearTimeout(timer);
		};
	};

	const handleSaveButton = (postStore: PostStore) => {
		const state = { ...postStore };
		delete state.teamName;
		postContent(state).then((res) => {
			if (!res.ok) {
				changeModalState(ModalType.postConfirm);
				return alert('예기치 못한 에러가 발생했습니다. 다시 시도해주세요. 🙂');
			}
			if (res.status) {
				handleToast();
			}
		});
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
			<ModalFooter
				onCancel={handleCloseModal}
				onConfirm={() => {
					handleSaveButton(postStore);
				}}
			/>
		</ModalContainer>
	);
};
