import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [isAuthOpen, setAuth] = useState(false);
	const [isAddressOpen, setAddress] = useState(false);
	const [isProductCardOpen, setProductCard] = useState(false);

	useEffect(() => {
		const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		const anyModalOpen = isAuthOpen || isAddressOpen || isProductCardOpen;

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
	}, [isAuthOpen, isAddressOpen, isProductCardOpen]);

	return (
		<ModalContext.Provider value={{
			isAuthOpen,
			isAddressOpen,
			isProductCardOpen,
			setAuth,
			setAddress,
			setProductCard
		}}>
			{children}
		</ModalContext.Provider>
	);
};