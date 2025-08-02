import styles from "../../../styles/components/Footer.module.sass";
import H6 from "../../../ui/Titles/H6.jsx";
import ListItem from "../../../ui/TextElements/ListItem.jsx";
import Link from "../../../ui/TextElements/Link.jsx";

const CONTACTS = [
	{ src: "./icons/viber.png", alt: "viber" },
	{ src: "./icons/skype.png", alt: "skype" },
	{ src: "./icons/messenger.png", alt: "messenger" },
	{ src: "./icons/telegram.png", alt: "telegram" },
	{ src: "./icons/facebook.png", alt: "facebook" },
	{ src: "./icons/vk.png", alt: "vk" }
];

const FooterContacts = () => {
	return (
		<nav className={styles.footer__contacts}>
			<H6 className={styles.footer__contacts_title}>
				Остались вопросы? А мы всегда на связи:
			</H6>

			<ul className={styles.footer__contacts_list}>
				{CONTACTS.map((item, i) => (
					<ListItem key={i} liClass={styles.footer__contacts_item}>
						<Link className={styles.footer__contacts_link_img}>
							<img src={item.src} alt={item.alt} />
						</Link>
					</ListItem>
				))}

				<ListItem liClass={styles.footer__contacts_item}>
					<Link className={styles.footer__contacts_link}>
						Написать нам
					</Link>
				</ListItem>
			</ul>
		</nav>
	);
};

export default FooterContacts;