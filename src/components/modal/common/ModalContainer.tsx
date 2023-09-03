import React from 'react'

export const ModalContainer = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="justify-center items-center flex fixed inset-0 z-50  bg-[rgba(0,0,0,.3)] animate-fadeIn">
			<div className="flex flex-col bg-white rounded-[20px]">{children}</div>
		</div>
	)
}
