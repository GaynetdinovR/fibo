import styles from "../../styles/components/Header.module.sass";
import HeaderNavBar from "./components/HeaderNavBar.jsx";
import HeaderTopSide from "./components/HeaderTopSide.jsx";
import { useState } from "react";

const Header = () => {
	const [isMenuOpen, setMenu] = useState(false);

	return (
		<header className={styles.header}>
			<HeaderTopSide isMenuOpen={isMenuOpen} setMenu={setMenu}/>
			<HeaderNavBar isMenuOpen={isMenuOpen}/>
		</header>
	);
};

export default Header;