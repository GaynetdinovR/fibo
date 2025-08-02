import styles from "../../../styles/components/Footer.module.sass";
import H6 from "../../../ui/Titles/H6.jsx";
import Link from "../../../ui/TextElements/Link.jsx";
import ListItem from "../../../ui/TextElements/ListItem.jsx";

const LINKS = ["YouTube", "Facebook", "Instagram", "ВКонтакте"];

const FooterNavBar = () => {
	return (
		<nav className={styles.footer__nav}>
			<H6 className={styles.footer__nav_title}>Мы в соцсетях</H6>
			<ul className={styles.footer__nav_list}>
				{LINKS.map((item, i) => (
					<ListItem key={i} className={styles.footer__nav_item}>
						<Link className={styles.footer__nav_link}>{item}</Link>
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
