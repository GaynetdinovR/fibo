import styles from "../../../styles/components/Footer.module.sass";
import H6 from "../../../ui/Titles/H6.jsx";
import ListItem from "../../../ui/TextElements/ListItem.jsx";
import Link from "../../../ui/TextElements/Link.jsx";

const SOCIAL_CONTACTS = [
	{
		src: "/icons/viber.webp",
		alt: "Viber",
		href: "https://www.viber.com/",
		ariaLabel: "Связаться через Viber"
	},
	{
		src: "/icons/skype.webp",
		alt: "Skype",
		href: "https://www.skype.com/",
		ariaLabel: "Связаться через Skype"
	},
	{
		src: "/icons/messenger.webp",
		alt: "Facebook Messenger",
		href: "https://www.messenger.com/",
		ariaLabel: "Связаться через Messenger"
	},
	{
		src: "/icons/telegram.webp",
		alt: "Telegram",
		href: "https://telegram.org/",
		ariaLabel: "Связаться через Telegram"
	},
	{
		src: "/icons/facebook.webp",
		alt: "Facebook",
		href: "https://www.facebook.com/",
		ariaLabel: "Связаться через Facebook"
	},
	{
		src: "/icons/vk.webp",
		alt: "ВКонтакте",
		href: "https://vk.com/",
		ariaLabel: "Связаться через ВКонтакте"
	}
];

const FooterContacts = () => {
	return (
		<nav className={styles.footer__contacts}>
			<H6 className={styles.footer__contacts_title}>
				Остались вопросы? А мы всегда на связи:
			</H6>

			<ul className={styles.footer__contacts_list}>
				{SOCIAL_CONTACTS.map((item, i) => (
					<ListItem key={i} liClass={styles.footer__contacts_item}>
						<Link
							href={item.href}
							ariaLabel={item.ariaLabel}
							className={styles.footer__contacts_link_img}
							openInNewTab={true}
						>
							<img src={item.src} alt={item.alt} />
						</Link>
					</ListItem>
				))}

				<ListItem liClass={styles.footer__contacts_item}>
					<Link
						href={"https://vk.com/"}
						className={styles.footer__contacts_link}
					>
						Написать нам
					</Link>
				</ListItem>
			</ul>
		</nav>
	);
};

export default FooterContacts;