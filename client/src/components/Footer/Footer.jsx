import styles from "../../styles/components/Footer.module.sass";
import Logo from "../../ui/Logo.jsx";
import OvalButton from "../../ui/OvalButton.jsx";
import PhoneNumber from "../../ui/PhoneNumber.jsx";
import LinkUI from "../../ui/LinkUI.jsx";
import FooterNavBar from "./components/FooterNavBar.jsx";
import FooterContacts from "./components/FooterContacts.jsx";

const Footer = () => {
	const windowWidth = window.innerWidth;

	const logo = (
		<div className={styles.footer__logo}>
			<Logo/>
		</div>
	);

	const cardTypes = [
		{ src: "./icons/visa.png", alt: "visa" },
		{ src: "./icons/paypal.png", alt: "paypal" },
		{ src: "./icons/mastercard.png", alt: "mastercard" }
	];

	const copyright = (
		<div className={styles.footer__copyright}>
			<span>YaBao Все права защищены © 2021</span>
			<div className={styles.footer__copyright_imgs}>
				{cardTypes.map((item, i) => (
					<div key={i} className={styles.footer__copyright_img}>
						<img src={item.src} alt={item.alt} />
					</div>
				))}
			</div>
		</div>
	);

	const phoneInfo = (
		<div className={styles.footer__phone_info}>
			<PhoneNumber
				phoneNumber={"8 499 391-84-49"}
				className={styles.footer__phone_number}
			/>

			<OvalButton className={styles.footer__get_call}>
				Заказать звонок
			</OvalButton>
		</div>
	);

	const phoneMediumContainer = (
		<div className={styles.footer__phone_medium_container}>
			{logo} {phoneInfo}
		</div>
	);

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__left_side}>
				{windowWidth <= 540 ? phoneMediumContainer : null}

				{windowWidth > 960 ? logo : null}

				<div className={styles.footer__info}>
					{windowWidth <= 960 && windowWidth > 540 ? logo : null}

					<LinkUI className={styles.footer__info_link} href={"#"}>
						Калорийность и состав
					</LinkUI>

					<LinkUI className={styles.footer__info_link} href={"#"}>
						Правовая информация
					</LinkUI>
				</div>

				<FooterNavBar />

				{windowWidth > 960 ? <>{copyright}</> : null}
			</div>

			<div className={styles.footer__right_side}>
				<FooterContacts />

				{windowWidth > 540 ? phoneInfo : null}

				{windowWidth <= 960 ? copyright : null}
			</div>

			<div className={styles.footer__bg_img}>
				<img src="./content/logo_2.png" alt="bg" />
			</div>
		</footer>
	);
};
export default Footer;
