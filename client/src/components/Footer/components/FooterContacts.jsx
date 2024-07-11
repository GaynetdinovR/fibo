import styles from "../../../styles/components/Footer.module.sass";
import H6 from "../../../ui/H6.jsx";
import LinkInList from "../../../ui/LinkInList.jsx";

const FooterContacts = () => {
	const contacts = [
		{ src: "./icons/viber.png", alt: "viber" },
		{ src: "./icons/skype.png", alt: "skype" },
		{ src: "./icons/messenger.png", alt: "messenger" },
		{ src: "./icons/telegram.png", alt: "telegram" },
		{ src: "./icons/facebook.png", alt: "facebook" },
		{ src: "./icons/vk.png", alt: "vk" }
	];

	return (
		<nav className={styles.footer__contacts}>
			<H6 className={styles.footer__contacts_title}>
				Остались вопросы? А мы всегда на связи:
			</H6>
			<ul className={styles.footer__contacts_list}>
				{contacts.map((item, i) => (
					<LinkInList
						key={i}
						liClass={styles.footer__contacts_item}
						aClass={styles.footer__contacts_link_img}
					>
						<img src={item.src} alt={item.alt} />
					</LinkInList>
				))}
				<LinkInList
					liClass={styles.footer__contacts_item}
					aClass={styles.footer__contacts_link}
				>
					Написать нам
				</LinkInList>
			</ul>
		</nav>
	);
};

export default FooterContacts;