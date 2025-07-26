import Footer from "../../components/Footer/Footer.jsx";
import NotificationContainer from "react-notifications/lib/NotificationContainer.js";
import OrderHeader from './OrderHeader.jsx';

const OrderTemplate = ({ children, status }) => {
	return (
		<>
			<OrderHeader status={status} />
			<NotificationContainer />
			<main> {children} </main>
			<Footer />
		</>
	);
};

export default OrderTemplate;
