import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";
import classNames from "classnames";
import Logo from "../../../ui/Logo.jsx";
import OvalButton from "../../../ui/OvalButton.jsx";
import PhoneNumber from "../../../ui/PhoneNumber.jsx";

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
		<PhoneNumber phoneNumber={'8 499 391-84-49'} className={styles.header__phone_number}/>
	);

	return (
		<div className={styles.header__top_side}>
			<div className={styles.header__logo}>
				<Logo/>
			</div>
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
				<OvalButton className={styles.header__get_call}>
					Заказать звонок
				</OvalButton>
				{windowWidth > 480 ? phoneNumber : ""}
				{windowWidth <= 960 && windowWidth > 480 ? cartBtn : ""}
				{windowWidth <= 960 ? menuBtn : ""}
			</div>
		</div>
	);
};

export default HeaderTopSide;
