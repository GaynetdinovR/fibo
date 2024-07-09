import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";
import classNames from "classnames";

const HeaderTopSide = ({ isMenuOpen, setMenu }) => {
	const windowWidth = window.innerWidth;

	const cartBtn = (
		<Button className={styles.header__cart_btn}>Корзина | 0</Button>
	);

	const menuBtnClassName = isMenuOpen
		? classNames(styles.header__menu_btn, styles.header__menu_btn_open)
		: styles.header__menu_btn;

	const menuBtn = (
		<button
			onClick={() => setMenu(!isMenuOpen)}
			className={menuBtnClassName}
		>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);

	const phoneNumber = (
		<a href="tel:84993918449" className={styles.header__phone_number}>
			8 499 391-84-49
		</a>
	);

	return (
		<div className={styles.header__top_side}>
			<a className={styles.header__logo}>
				<img src="./icons/logo_1.png" alt="logo" />
			</a>
			<div className={styles.header__left_top_side}>
				<div className={styles.header__location}>
					<span> Доставка пасты </span>
					<span className={styles.header__city}> Москва </span>
				</div>
				<div className={styles.header__service}>
					<div className={styles.header__service_img}>
						<img src="./icons/yandex_food.png" alt="yandex_food" />
					</div>

					<span className={styles.header__service_name}>
						Яндекс Еда
					</span>

					<div className={styles.header__service_grade}>
						<span>4.8</span>
						<div>
							<img src="./icons/star.png" alt="star" />
						</div>
					</div>

					<div className={styles.header__delivery_time}>
						<span>Время доставки</span>
						<span>от 31 мин</span>
					</div>
				</div>
			</div>
			<div className={styles.header__right_top_side}>
				<button className={styles.header__get_call}>
					Заказать звонок
				</button>
				{windowWidth > 480 ? phoneNumber : ""}
				{windowWidth <= 960 && windowWidth > 480 ? cartBtn : ""}
				{windowWidth <= 960 ? menuBtn : ""}
			</div>
		</div>
	);
};

export default HeaderTopSide;
