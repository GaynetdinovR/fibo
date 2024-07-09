import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";

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
		<a href="tel:84993918449" className={styles.header__phone_number}>
			8 499 391-84-49
		</a>
	);

	return (
		<nav
			className={
				isMenuOpen || windowWidth > 768
					? styles.header__navbar
					: styles.header__navbar_closed
			}
		>
			<ul className={styles.header__list}>
				{navbarLinks.map((item, i) => (
					<li key={i} className={styles.header__item}>
						<a className={styles.header__link}>{item}</a>
					</li>
				))}
			</ul>
			<button className={styles.header__auth}>Войти</button>
			{windowWidth <= 480 ? phoneNumber : ""}
			{windowWidth > 960 || windowWidth <= 480 ? cartBtn : ""}
		</nav>
	);
};

export default HeaderNavBar;
