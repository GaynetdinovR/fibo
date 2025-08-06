import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import AuthModal from "../../components/AuthModal/AuthModal.jsx";
import AddressModal from "../../components/AddressModal/AddressModal.jsx";

import NotificationContainer from "react-notifications/lib/NotificationContainer.js";
import { ModalContext, ModalProvider } from "../Providers/ModalProvider.jsx";
import MenuProvider from "../Providers/MenuProvider.jsx";
import { memo, useContext } from "react";

// eslint-disable-next-line react/display-name
const Template = memo(({ children }) => {
	const { isAuthOpen, isAddressOpen } = useContext(ModalContext);

	return (
		<>
			<NotificationContainer />
			<MenuProvider>
				<Header />
			</MenuProvider>

			<main>{children}</main>

			<Footer />

			{isAuthOpen && <AuthModal />}
			{isAddressOpen && <AddressModal />}
		</>
	);
});

export default function TemplateWrapper({ children }) {
	return (
		<ModalProvider>
			<Template>{children}</Template>
		</ModalProvider>
	);
}

