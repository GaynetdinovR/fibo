import styles from "../../../styles/components/Header.module.sass";

import classNames from "classnames";

import Logo from "../../../ui/Other/Logo.jsx";
import OvalButton from "../../../ui/Buttons/OvalButton.jsx";
import PhoneNumber from "../../../ui/Other/PhoneNumber.jsx";
import CartButton from "./CartButton.jsx";
import MenuButton from "./MenuButton.jsx";
import Service from "./Service.jsx";

const HeaderTopSide = ({ isMenuOpen, setMenu }) => {
	const windowWidth = window.innerWidth;

	const menuBtnClassName = classNames(
		styles.header__menu_btn,
		isMenuOpen && styles.header__menu_btn_open
	);

	const handleMenuClick = () => {
		setMenu(!isMenuOpen);
	};

	const isMobile = windowWidth <= 480;
	const isTablet = windowWidth > 480 && windowWidth <= 960;
	const isDesktop = windowWidth > 960;

	return (
		<div className={styles.header__top_side}>
			<Logo
				className={styles.header__logo}
				onClick={() => setMenu(false)}
			/>

			<div className={styles.header__left_top_side}>
				<div className={styles.header__location}>
					<span> Доставка пасты </span>
					<span className={styles.header__city}> Москва </span>
				</div>
				<Service />
			</div>

			<div className={styles.header__right_top_side}>
				<OvalButton className={styles.header__get_call}>
					Заказать звонок
				</OvalButton>

				{!isMobile && (
					<PhoneNumber
						phoneNumber={"8 499 391-84-49"}
						className={styles.header__phone_number}
					/>
				)}

				{isTablet && <CartButton />}

				{!isDesktop && (
					<MenuButton className={menuBtnClassName} onClick={handleMenuClick} />
				)}
			</div>
		</div>
	);
};

export default HeaderTopSide;
