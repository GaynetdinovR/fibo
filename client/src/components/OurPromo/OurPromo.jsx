import styles from "../../styles/components/OurPromo.module.sass";
import H2 from "../../ui/H2.jsx";
import OvalButton from "../../ui/OvalButton.jsx";

const OurPromo = () => {
	const promos = [
		{ src: "./content/promo_1.jpg" },
		{ src: "./content/promo_2.jpg" },
		{ src: "./content/promo_3.jpg" },
		{ src: "./content/promo_1.jpg" },
		{ src: "./content/promo_4.jpg" }
	];

	return (
		<section className={styles.our_promo}>
			<H2 className={styles.our_promo__title}>
				<span>Наши </span>
				<span>акции</span>
			</H2>
			<div className={styles.our_promo__content}>
				{promos.map((promo, i) => (
					<div key={i} className={styles.our_promo__promo}>
						<img src={promo.src} alt="promo" />
					</div>
				))}
			</div>
			<OvalButton className={styles.our_promo__all_promo_btn}>
				Все акции
			</OvalButton>
		</section>
	);
};

export default OurPromo;