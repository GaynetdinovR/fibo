import styles from "../../styles/components/Header.module.sass";

import { lazy, Suspense, useContext, useState } from "react";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { MenuContext } from "../../ui/MenuProvider.jsx";

import HeaderTopSide from "./components/HeaderTopSide.jsx";
import HeaderNavBar from "./components/HeaderNavBar.jsx";
const LazyCart = lazy(() => import("../CartMenu/CartMenu.jsx"));

const Header = () => {
	const { setAuth } = useContext(ModalContext);
	const { isCartOpen, setCart } = useContext(MenuContext);

	const [isMenuOpen, setMenu] = useState(false);

	const isSmallDisplay = window.innerWidth < 620;
	const shouldRenderCart = isCartOpen && !isSmallDisplay;

	return (
		<header className={styles.header}>
			<HeaderTopSide isMenuOpen={isMenuOpen} setMenu={setMenu} />
			<HeaderNavBar
				setMenu={setMenu}
				setAuth={setAuth}
				isMenuOpen={isMenuOpen}
				cartData={{ isCartOpen: isCartOpen, setCart: setCart }}
			/>
			{shouldRenderCart && (
				<Suspense>
					<LazyCart />
				</Suspense>
			)}
		</header>
	);
};

export default Header;
