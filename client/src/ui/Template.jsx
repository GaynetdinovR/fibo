import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx";
import AddressModal from "../components/AddressModal/AddressModal.jsx";

import NotificationContainer from "react-notifications/lib/NotificationContainer.js";
import { ModalProvider } from "./ModalProvider.jsx";
import MenuProvider from "./MenuProvider.jsx";

const Template = ({ children }) => {
	return (
		<ModalProvider>
			<NotificationContainer />
			<MenuProvider>
				<Header />
			</MenuProvider>
			<AuthModal />
			<AddressModal />
			<main> {children} </main>
			<Footer />
		</ModalProvider>
	);
};

export default Template;