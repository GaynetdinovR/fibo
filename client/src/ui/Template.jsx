import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import AuthModal from "../components/AuthModal/AuthModal.jsx";
import { useEffect, useState } from "react";
import NotificationContainer from "react-notifications/lib/NotificationContainer.js";
import styles from "../styles/global.sass";

const Template = ({ children }) => {
	const [isAuthOpen, setAuth] = useState(false);

	useEffect(() => {
		if (isAuthOpen) {
			document.body.classList.add(styles.overflowy_hidden);
			document.body.classList.remove(styles.overflowy_showed);
		} else {
			document.body.classList.add(styles.overflowy_showed);
			document.body.classList.remove(styles.overflowy_hidden);
		}

		return () => {
			document.body.classList.remove(styles.overflowy_showed);
			document.body.classList.remove(styles.overflowy_hidden);
		}

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