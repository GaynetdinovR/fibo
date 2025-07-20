import styles from "../../../styles/components/Footer.module.sass";

const CARD_TYPES = [
	{ src: "./icons/visa.png", alt: "visa" },
	{ src: "./icons/paypal.png", alt: "paypal" },
	{ src: "./icons/mastercard.png", alt: "mastercard" }
];

const Copyright = () => {
	return (
		<div className={styles.footer__copyright}>
			<span>YaBao Все права защищены © 2021</span>
			<div className={styles.footer__copyright_imgs}>
				{CARD_TYPES.map((item, i) => (
					<div key={i} className={styles.footer__copyright_img}>
						<img src={item.src} alt={item.alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Copyright;
