import styles from "../../styles/components/Footer.module.sass";
import Logo from "../../ui/Logo.jsx";
import OvalButton from "../../ui/OvalButton.jsx";
import PhoneNumber from "../../ui/PhoneNumber.jsx";
import LinkUI from "../../ui/LinkUI.jsx";
import FooterNavBar from "./components/FooterNavBar.jsx";
import FooterContacts from "./components/FooterContacts.jsx";
import Copyright from "./components/Copyright.jsx";
import PhoneInfo from "./components/PhoneInfo.jsx";

const Footer = () => {
	const windowWidth = window.innerWidth;

	const isMobile = windowWidth <= 540;
	const isTablet = windowWidth <= 960 && windowWidth > 540;
	const isDesktop = windowWidth > 960;

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__left_side}>
				{isMobile && (
					<div className={styles.footer__phone_medium_container}>
						<Logo className={styles.footer__logo} />

						<PhoneInfo />
					</div>
				)}

				{isDesktop && <Logo className={styles.footer__logo} />}

				<div className={styles.footer__info}>
					{isTablet && <Logo className={styles.footer__logo} />}

					<LinkUI className={styles.footer__info_link} href={"#"}>
						Калорийность и состав
					</LinkUI>

					<LinkUI className={styles.footer__info_link} href={"#"}>
						Правовая информация
					</LinkUI>
				</div>

				<FooterNavBar />

				{isDesktop && <Copyright />}
			</div>

			<div className={styles.footer__right_side}>
				<FooterContacts />

				{!isMobile && <PhoneInfo />}

				{!isDesktop && <Copyright />}
			</div>

			<div className={styles.footer__bg_img}>
				<img src="./content/logo_2.png" alt="bg" />
			</div>
		</footer>
	);
};
export default Footer;
