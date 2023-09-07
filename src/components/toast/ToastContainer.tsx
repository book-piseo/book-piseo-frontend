import React from 'react';

export const ToastContainer = ({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) => {
	return (
		<div className={`left-0 right-0 mx-0 fixed bottom-0 rem:mb-[80px]  ${isOpen ? 'block' : 'hidden'} `}>
			<div className="flex justify-center">{children}</div>
		</div>
	);
};
