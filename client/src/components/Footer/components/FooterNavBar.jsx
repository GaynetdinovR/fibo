import styles from "../../../styles/components/Footer.module.sass";
import Link from "../../../ui/TextElements/Link.jsx";
import ListItem from "../../../ui/TextElements/ListItem.jsx";
import H5 from "../../../ui/Titles/H5.jsx";

const SOCIAL_LINKS = [
	{
		name: "YouTube",
		href: "https://www.youtube.com/",
		ariaLabel: "Наш канал на YouTube"
	},
	{
		name: "Facebook",
		href: "https://www.facebook.com/",
		ariaLabel: "Наша страница на Facebook"
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/",
		ariaLabel: "Наш аккаунт в Instagram"
	},
	{
		name: "ВКонтакте",
		href: "https://vk.com/",
		ariaLabel: "Наша страница ВКонтакте"
	}
];

const FooterNavBar = () => {
	return (
		<nav className={styles.footer__nav}>
			<H5 className={styles.footer__nav_title}>Мы в соцсетях</H5>
			<ul className={styles.footer__nav_list}>
				{SOCIAL_LINKS.map((item, i) => (
					<ListItem key={i} className={styles.footer__nav_item}>
						<Link
							openInNewTab={true}
							ariaLabel={item.ariaLabel}
							href={item.href}
							className={styles.footer__nav_link}
						>
							{item.name}
						</Link>
					</ListItem>
				))}
				<li className={styles.footer__nav_item}>
					<address className={styles.footer__nav_address}>
						<span> Москва ул. Проспект </span>
						<span> Вернадского 86В </span>
					</address>
				</li>
			</ul>
		</nav>
	);
};

export default FooterNavBar;
