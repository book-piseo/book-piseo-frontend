import { marked } from 'marked';

export const Content = ({ contentsText }: { contentsText?: string }) => {
	const createMarkup = () => {
		return { __html: marked(contentsText || '') };
	};

	return <div className="rem:mt-[72px] text-s3_regular text-dark-grey-1" dangerouslySetInnerHTML={createMarkup()} />;
};
