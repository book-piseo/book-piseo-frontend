import Link from 'next/link';
import React from 'react';

type LinkButtonProps = {
	children: React.ReactNode;
	pathUrl: string;
	className?: string;
};

export const LinkButton = ({ children, pathUrl, className }: LinkButtonProps) => {
	return (
		<Link href={pathUrl} className={`text-dark-grey-2 text-p1_regular ${className}`}>
			{children}
		</Link>
	);
};
