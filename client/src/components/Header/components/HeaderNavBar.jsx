import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";
import LinkInList from "../../../ui/LinkInList.jsx";
import PhoneNumber from "../../../ui/PhoneNumber.jsx";
import { useLocation } from "react-router-dom";
import RouterLinkInList from "../../../ui/RouterLinkInList.jsx";

const HeaderNavBar = ({ isMenuOpen }) => {
	const navbarLinks = [
		{ text: "Пиццы", href: "#pizza", to: "/" },
		{ text: "Пасты", href: "#pasta", to: "/" },
		{ text: "Супы", href: "#soup", to: "/" },
		{ text: "Салаты", href: "#salad", to: "/" },
		{ text: "Закуски", href: "#snack", to: "/" },
		{ text: "Напитки", href: "#drink", to: "/" },
		{ text: "Акции", to: "/promo" },
		{ text: "Контакты", to: "/contacts" }
	];

	const windowWidth = window.innerWidth;

	const cartBtn = (
		<Button className={styles.header__cart_btn}>Корзина | 0</Button>
	);

	const phoneNumber = (
		<PhoneNumber
			phoneNumber={"8 499 391-84-49"}
			className={styles.header__phone_number}
		/>
	);

	return (
		<nav
			className={
				isMenuOpen || windowWidth > 960
					? styles.header__navbar
					: styles.header__navbar_closed
			}
		>
			<ul className={styles.header__list}>
				{navbarLinks.map((item, i) => {
					if (useLocation().pathname === item.to) {
						return (
							<LinkInList
								key={i}
								liClass={styles.header__item}
								aClass={styles.header__link}
								href={item.href}
							>
								{item.text}
							</LinkInList>
						);
					} else {
						return (
							<RouterLinkInList
								key={i}
								liClass={styles.header__item}
								aClass={styles.header__link}
								href={item.href}
								to={item.to}
							>
								{item.text}
							</RouterLinkInList>
						);
					}
				})}
			</ul>

			<div className={styles.header__right_bottom_side}>
				<button className={styles.header__auth}>Войти</button>
				{windowWidth > 960 ? cartBtn : ""}
			</div>
			{windowWidth <= 480 ? phoneNumber : ""}
			{windowWidth <= 480 ? cartBtn : ""}
		</nav>
	);
};

export default HeaderNavBar;
