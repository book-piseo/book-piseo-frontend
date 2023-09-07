import { AffiliatedTeamInfo } from '@models/team.model';

type Props = {
	info: AffiliatedTeamInfo;
	isSelected: boolean;
	handleClickItem: () => void;
};

export const TeamListItem = ({ info, isSelected, handleClickItem }: Props) => {
	return (
		<li
			className={`rem:px-[30px] rem:py-[20px] text-p1_premium border-solid border-[1px] rounded-[10px] cursor-pointer
			${isSelected ? 'border-primary' : 'border-dark-grey-2'} 
			${isSelected ? 'bg-primary-sub' : 'bg-white'}   
		hover:border-primary hover:bg-primary-sub`}
			value={info.teamId}
			onClick={handleClickItem}
		>
			{info.teamName}
		</li>
	);
};
