import styles from "../../../styles/components/Footer.module.sass";
import H6 from "../../../ui/H6.jsx";
import LinkInList from "../../../ui/LinkInList.jsx";

const FooterNavBar = () => {
	const links = ["YouTube", "Facebook", "Instagram", "ВКонтакте"];

	return (
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
	);
};

export default FooterNavBar;