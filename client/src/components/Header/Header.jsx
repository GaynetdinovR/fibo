import styles from "../../styles/components/Header.module.sass";

import { useContext, useState } from "react";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { useBodyScrollLock } from "../../utils/hooks.js";

import HeaderTopSide from "./components/HeaderTopSide.jsx";
import HeaderNavBar from "./components/HeaderNavBar.jsx";

const Header = () => {
	const { setAuth } = useContext(ModalContext);
	const [isMenuOpen, setMenu] = useState(false);

	useBodyScrollLock(isMenuOpen);

	return (
		<header className={styles.header}>
			<HeaderTopSide isMenuOpen={isMenuOpen} setMenu={setMenu} />
			<HeaderNavBar
				setMenu={setMenu}
				setAuth={setAuth}
				isMenuOpen={isMenuOpen}
			/>
		</header>
	);
};

export default Header;