import styles from "../../styles/components/Footer.module.sass";
import Logo from "../../ui/Logo.jsx";
import LinkInList from "../../ui/LinkInList.jsx";
import OvalButton from "../../ui/OvalButton.jsx";
import PhoneNumber from "../../ui/PhoneNumber.jsx";
import Link from "../../ui/Link.jsx";
import H6 from "../../ui/H6.jsx";

const Footer = () => {
	const windowWidth = window.innerWidth;

	const links = ["YouTube", "Facebook", "Instagram", "ВКонтакте"];
	const contacts = [
		{ src: "./icons/viber.png", alt: "viber" },
		{ src: "./icons/skype.png", alt: "skype" },
		{ src: "./icons/messenger.png", alt: "messenger" },
		{ src: "./icons/telegram.png", alt: "telegram" },
		{ src: "./icons/facebook.png", alt: "facebook" },
		{ src: "./icons/vk.png", alt: "vk" }
	];

	const logo = (
		<div className={styles.footer__logo}>
			<Logo />
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
			<PhoneNumber phoneNumber={"8 499 391-84-49"} className={styles.footer__phone_number} />

			<OvalButton className={styles.footer__get_call}>
				Заказать звонок
			</OvalButton>
		</div>
	);

	return (
		<footer className={styles.footer}>
			<div className={styles.footer__left_side}>
				{windowWidth <= 540 ? <div className={styles.footer__phone_medium_container}>{logo}{phoneInfo}</div> : ""}

				{windowWidth > 960 ? logo : ""}
				<div className={styles.footer__info}>
					{windowWidth <= 960 && windowWidth > 540 ? logo : ""}
					<Link className={styles.footer__info_link} href={"#"}>Калорийность и состав</Link>
					<Link className={styles.footer__info_link} href={"#"}>Правовая информация</Link>
				</div>
				<nav className={styles.footer__nav}>
					<H6 className={styles.footer__nav_title}>Мы в соцсетях</H6>
					<ul className={styles.footer__nav_list}>
						{links.map((item, i) => (
							<LinkInList key={i} liClass={styles.footer__nav_item} aClass={styles.footer__nav_link}>
								{item}
							</LinkInList>
						))}
						<li className={styles.footer__nav_item}>
							<address className={styles.footer__nav_address}>
								<span> Москва ул. Проспект </span>
								<span> Вернадского 86В </span>
							</address>
						</li>
					</ul>
				</nav>

				{windowWidth > 960 ? <>{copyright}</> : ""}
			</div>

			<div className={styles.footer__right_side}>
				<nav className={styles.footer__contacts}>
					<H6 className={styles.footer__contacts_title}>Остались вопросы? А мы всегда на связи:</H6>
					<ul className={styles.footer__contacts_list}>
						{contacts.map((item, i) => (
							<LinkInList key={i} liClass={styles.footer__contacts_item}
										aClass={styles.footer__contacts_link_img}>
								<img src={item.src} alt={item.alt} />
							</LinkInList>
						))}
						<LinkInList liClass={styles.footer__contacts_item} aClass={styles.footer__contacts_link}>
							Написать нам
						</LinkInList>
					</ul>
				</nav>

				{windowWidth > 540 ? phoneInfo : ""}

				{windowWidth <= 960 ? copyright : ""}
			</div>

			<div className={styles.footer__bg_img}>
				<img src="./content/logo_2.png" alt="bg" />
			</div>
		</footer>
	);
};
export default Footer;