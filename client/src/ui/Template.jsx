import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx";
import { useEffect, useState } from "react";
import NotificationContainer from "react-notifications/lib/NotificationContainer.js";

const Template = ({ children }) => {
	const [isAuthOpen, setAuth] = useState(false);
	const scrollbarWidth =
		window.innerWidth - document.documentElement.clientWidth;

	useEffect(() => {
		if (isAuthOpen) {
			document.body.style.overflowY = "hidden";
			document.body.style.marginRight = scrollbarWidth + "px";
		} else {
			document.body.style.overflowY = "";
			document.body.style.marginRight = "";
		}

		return () => {
			document.body.style.overflowY = "";
			document.body.style.marginRight = "";
		};

	}, [isAuthOpen]);

	return (
		<>
			<NotificationContainer />
			<Header setAuth={setAuth} />
			<AuthModal isOpen={isAuthOpen} setOpen={setAuth} />
			{children}
			<Footer />
		</>
	);
};

export default Template;