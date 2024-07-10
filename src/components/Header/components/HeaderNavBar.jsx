import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";
import LinkInList from "../../../ui/LinkInList.jsx";
import PhoneNumber from "../../../ui/PhoneNumber.jsx";

const HeaderNavBar = ({ isMenuOpen }) => {
	const navbarLinks = [
		"Пицца",
		"Паста",
		"Супы",
		"Салаты",
		"Напитки",
		"Десерты",
		"Бакалея",
		"Антипасти",
		"Акции",
		"Комбо",
		"Контакты"
	];
	const windowWidth = window.innerWidth;

	const cartBtn = (
		<Button className={styles.header__cart_btn}>Корзина | 0</Button>
	);

	const phoneNumber = (
		<PhoneNumber phoneNumber={'8 499 391-84-49'} className={styles.header__phone_number}/>
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
				{navbarLinks.map((item, i) => (
					<LinkInList key={i} liClass={styles.header__item} aClass={styles.header__link}>
						{item}
					</LinkInList>
				))}
			</ul>
			<button className={styles.header__auth}>Войти</button>
			{windowWidth <= 480 ? phoneNumber : ""}
			{windowWidth > 960 || windowWidth <= 480 ? cartBtn : ""}
		</nav>
	);
};

export default HeaderNavBar;
