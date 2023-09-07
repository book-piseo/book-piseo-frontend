import { useSetPostStore } from '@stores/usePostStore';
import { useCallback, useRef } from 'react';

export const ContentTextarea = () => {
	const setPostState = useSetPostStore();
	const textareaRef: any = useRef();

	const handleResizeHeight = useCallback(() => {
		textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
	}, []);

	return (
		<div className="rem:min-h-[500px]">
			<textarea
				ref={textareaRef}
				rows={1}
				className="w-full focus:outline-none text-s3_regular resize-none overflow-y-visible "
				placeholder="책을 읽고 난 후 당신의 생각을 함께 나눠요."
				onChange={(e) => {
					handleResizeHeight();
					setPostState({ contentsText: e.currentTarget.value });
				}}
			/>
		</div>
	);
};
