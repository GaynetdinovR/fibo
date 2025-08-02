import Footer from "../../../components/Footer/Footer.jsx";
import NotificationContainer from "react-notifications/lib/NotificationContainer.js";
import OrderHeader from './OrderHeader.jsx';
import { ModalProvider } from "../../Providers/ModalProvider.jsx";
import AddressModal from "../../../components/AddressModal/AddressModal.jsx";
import AuthModal from "../../../components/AuthModal/AuthModal.jsx";

const OrderTemplate = ({ children, status }) => {
	return (
		<>
			<ModalProvider>
				<AddressModal />
				<AuthModal />
				<OrderHeader status={status} />
				<NotificationContainer />
				<main> {children} </main>
				<Footer />
			</ModalProvider>
		</>
	);
};

export default OrderTemplate;
