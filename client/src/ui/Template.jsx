import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx";
import AddressModal from "../components/AddressModal/AddressModal.jsx";

import { useEffect, useState } from "react";
import NotificationContainer from "react-notifications/lib/NotificationContainer.js";
import { ModalProvider } from "./ModalProvider.jsx";

const Template = ({ children }) => {
	return (
		<ModalProvider>
			<NotificationContainer />
			<Header />
			<AuthModal />
			<AddressModal />
			<main> {children} </main>
			<Footer />
		</ModalProvider>
	);
};

export default Template;