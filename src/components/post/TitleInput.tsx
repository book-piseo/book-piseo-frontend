import { useSetPostStore } from '@stores/usePostStore';

export const TitleInput = () => {
	const setPostStore = useSetPostStore();

	return (
		<input
			type="text"
			maxLength={50}
			className="text-h1_bold border-b border-light-grey-2 rem:pb-[40px] resize-none
         focus:outline-none hover:border-[#0C2374] focus:border-[#0C2374]"
			placeholder="제목"
			onChange={(e) => {
				setPostStore({ contentsTitle: e.currentTarget.value });
			}}
		/>
	);
};
