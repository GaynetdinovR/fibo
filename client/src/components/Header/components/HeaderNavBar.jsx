import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";
import LinkInList from "../../../ui/LinkInList.jsx";
import PhoneNumber from "../../../ui/PhoneNumber.jsx";
import { useLocation } from "react-router-dom";
import RouterLinkInList from "../../../ui/RouterLinkInList.jsx";
import { useSelector } from "react-redux";

const HeaderNavBar = ({ isMenuOpen, setMenu, setAuth }) => {
	const user = useSelector((state) => state.user);

	const navbarLinks = [
		{ text: "Пиццы", href: "#pizza", to: "/" },
		{ text: "Пасты", href: "#pasta", to: "/" },
		{ text: "Супы", href: "#soup", to: "/" },
		{ text: "Салаты", href: "#salad", to: "/" },
		{ text: "Закуски", href: "#snack", to: "/" },
		{ text: "Напитки", href: "#drink", to: "/" },
		{ text: "Акции", to: "/promo" },
		{ text: "Контакты", to: "/contacts" },
		{ text: "Профиль", to: "/profile", isNeedLogIn: true }
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

	const logInBtn = (
		<button
			onClick={() => {
				setAuth(true);
				setMenu(false);
			}}
			className={styles.header__auth}
		>
			Войти
		</button>
	);

	return (
		<nav
			className={
				isMenuOpen || windowWidth > 960
					? styles.header__navbar
					: styles.header__navbar_closed
			}
		>
			<ul className={styles.header__list} onClick={() => setMenu(false)}>
				{navbarLinks.map((item, i) => {
					if (item.isNeedLogIn) {
						if (!user.isLogged) return;
					}

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
				{!user.isLogged ? logInBtn : null}
				{windowWidth > 960 ? cartBtn : null}
			</div>
			{windowWidth <= 480 ? phoneNumber : null}
			{windowWidth <= 480 ? cartBtn : null}
		</nav>
	);
};

export default HeaderNavBar;
