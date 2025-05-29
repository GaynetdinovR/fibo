import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isAuthOpen, setAuth] = useState(false);
	const [isAddressOpen, setAddress] = useState(false);

	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const anyModalOpen = isAuthOpen || isAddressOpen;

		if (anyModalOpen) {
			document.body.style.overflowY = "hidden";
			document.body.style.paddingRight = `${scrollbarWidth}px`;
		} else {
			document.body.style.overflowY = "";
			document.body.style.paddingRight = "";
		}

		return () => {
			document.body.style.overflowY = "";
			document.body.style.paddingRight = "";
		};
	}, [isAuthOpen, isAddressOpen]);

	return (
		<ModalContext.Provider value={{
			isAuthOpen,
			isAddressOpen,
			setAuth,
			setAddress
		}}>
			{children}
		</ModalContext.Provider>
	);
};