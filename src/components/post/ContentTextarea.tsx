import { useSetPostStore } from '@stores/usePostStore';

export const ContentTextarea = () => {
	const setPostState = useSetPostStore();
	return (
		<textarea
			className="h-[full] focus:outline-none text-s3_regular resize-none overflow-y-visible "
			placeholder="책을 읽고 난 후 당신의 생각을 함께 나눠요."
			onChange={(e) => {
				setPostState({ contentsText: e.currentTarget.value });
			}}
		/>
	);
};
