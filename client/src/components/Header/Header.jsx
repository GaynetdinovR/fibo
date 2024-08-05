import styles from "../../styles/components/Header.module.sass";
import HeaderNavBar from "./components/HeaderNavBar.jsx";
import HeaderTopSide from "./components/HeaderTopSide.jsx";
import { useEffect, useState } from "react";
import globalStyles from "../../styles/global.sass";

const Header = ({ setAuth }) => {
	const [isMenuOpen, setMenu] = useState(false);

	useEffect(() => {
		if (isMenuOpen) {
			document.body.classList.add(globalStyles.overflowy_hidden);
			document.body.classList.remove(globalStyles.overflowy_showed);
		} else {
			document.body.classList.add(globalStyles.overflowy_showed);
			document.body.classList.remove(globalStyles.overflowy_hidden);
		}

		return () => {
			document.body.classList.remove(globalStyles.overflowy_showed);
			document.body.classList.remove(globalStyles.overflowy_hidden);
		};

	}, [isMenuOpen]);

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