import styles from "../../../styles/components/Header.module.sass";

import { useSelector } from "react-redux";

import PhoneNumber from "../../../ui/PhoneNumber.jsx";
import NavItem from "./NavItem.jsx";
import CartButton from "./CartButton.jsx";
import LogInButton from "./LogInButton.jsx";

const NAVBAR_LINKS = [
	{ text: "Пиццы", href: "#pizza", to: "/", id: "pizza" },
	{ text: "Пасты", href: "#pasta", to: "/", id: "pasta" },
	{ text: "Супы", href: "#soup", to: "/", id: "soup" },
	{ text: "Салаты", href: "#salad", to: "/", id: "salad" },
	{ text: "Закуски", href: "#snack", to: "/", id: "snack" },
	{ text: "Напитки", href: "#drink", to: "/", id: "drink" },
	{ text: "Акции", to: "/promo", id: "promo" },
	{ text: "Контакты", to: "/contacts", id: "contacts" },
	{ text: "Профиль", to: "/profile", isNeedLogIn: true, id: "profile" }
];

const HeaderNavBar = ({ isMenuOpen, setMenu, setAuth }) => {
	const user = useSelector((state) => state.user);
	const handleLogin = () => {
		setAuth(true);
		setMenu(false);
	};

	const isDesktop = window.innerWidth > 960;
	const isMobile = window.innerWidth <= 480;
	const shouldShowNavbar = isMenuOpen || isDesktop;

	return (
		<nav
			className={
				shouldShowNavbar
					? styles.header__navbar
					: styles.header__navbar_closed
			}
		>
			<ul className={styles.header__list} onClick={() => setMenu(false)}>
				{NAVBAR_LINKS.map((link) => {
					if (link.isNeedLogIn && !user.isLogged) return null;

					return (
						<NavItem
							key={link.id}
							to={link.to}
							href={link.href}
							liClass={styles.header__item}
							aClass={styles.header__link}
						>
							{link.text}
						</NavItem>
					);
				})}
			</ul>

			<div className={styles.header__right_bottom_side}>
				{!user.isLogged && <LogInButton onLogin={handleLogin} />}
				{isDesktop && <CartButton />}
			</div>

			{isMobile && (
				<>
					<PhoneNumber
						phoneNumber="8 499 391-84-49"
						className={styles.header__phone_number}
					/>
					<CartButton />
				</>
			)}
		</nav>
	);
};

export default HeaderNavBar;
