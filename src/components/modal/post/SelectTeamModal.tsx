'use client';
import { ModalType, useModalActions, useSelectTeamState } from '@/stores/useModalStore';
import { ModalContainer } from '../common/ModalContainer';
import { ModalHeader } from '../common/ModalHeader';
import { ModalContent } from '../common/ModalContent';
import { ModalFooter } from '../common/ModalFooter';
import { TeamListItem } from '@components/post/TeamListItem';
import { TeamInfo } from '@models/userInfo';
import { useEffect, useState } from 'react';
import { useSetPostStore } from '@stores/usePostStore';
import { getUserInfo } from '@apis/userInfoApi';
import { AffiliatedTeamInfo } from '@models/team.model';
import useStore from '@hooks/useStore';
import { useAuthStore } from '@stores/useAuthStore';

// api 연동되면 삭제
const dummy: TeamInfo[] = [
	{
		teamId: 'id1',
		teamName: '책을 피서 운영팀',
		teamDescription: 'string',
		teamImg: 'string',
		isMaster: true,
	},
	{
		teamId: 'id2',
		teamName: '소속팀',
		teamDescription: 'string',
		teamImg: 'string',
		isMaster: true,
	},
	{
		teamId: 'id3',
		teamName: '개인 독서',
		teamDescription: 'string',
		teamImg: 'string',
		isMaster: true,
	},
];

export const SelectTeamModal = () => {
	const store = useStore(useAuthStore, (state) => state);
	const [teamList, setTeamList] = useState<AffiliatedTeamInfo[]>([]);
	const [selectedTeam, setSelectedTeam] = useState<{ teamId: string; teamName: string }>({
		teamId: '',
		teamName: '',
	});

	const isModalOpen = useSelectTeamState();
	const changeModalState = useModalActions();
	const setPostStore = useSetPostStore();

	const isSelected = (item: TeamInfo) => item.teamId === selectedTeam.teamId;

	const handleCloseModal = () => {
		changeModalState(ModalType.selectTeam);
	};

	const handleClickItem = (item: TeamInfo) => {
		// 선택된 아이템일 경우 선택 해제
		if (isSelected(item)) {
			return setSelectedTeam({ teamId: '', teamName: '' });
		}
		setSelectedTeam({ teamId: item.teamId, teamName: item.teamName });
	};

	const handleConfirmButton = () => {
		setPostStore({ teamId: selectedTeam.teamId, teamName: selectedTeam.teamName });
		handleCloseModal();
	};

	/**
	 * fetch TeamList
	 */
	const getTeamList = async () => {
		if (!store?.token) return;
		const res = await getUserInfo({ token: store?.token });
		if (!res) {
			return;
		}
		setTeamList(res.affiliatedTeamInfos);
	};

	useEffect(() => {
		getTeamList();
		// eslint-disable-next-line
	}, [store?.token]);

	return (
		<ModalContainer isOpen={isModalOpen}>
			<ModalHeader title="게시글 작성 위치" onClose={handleCloseModal} />
			<ModalContent>
				<div className="rem:w-[800px] rem:h-[710px] justify-center">
					<ul className="flex flex-col rem:gap-[30px]">
						{dummy.map((item) => (
							<TeamListItem
								key={item.teamId}
								info={item}
								isSelected={item.teamId === selectedTeam.teamId}
								handleClickItem={() => {
									handleClickItem(item);
								}}
							/>
						))}
					</ul>
				</div>
			</ModalContent>
			<ModalFooter onCancel={handleCloseModal} onConfirm={handleConfirmButton} />
		</ModalContainer>
	);
};
