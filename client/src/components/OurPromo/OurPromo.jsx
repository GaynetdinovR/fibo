import styles from "../../styles/components/OurPromo.module.sass";
import H2 from "../../ui/Titles/H2.jsx";
import OvalButton from "../../ui/Buttons/OvalButton.jsx";
import { memo, useMemo } from "react";

const PROMOS = [
	{ src: "./content/promo_1.webp", alt: "Акция 1" },
	{ src: "./content/promo_2.webp", alt: "Акция 2" },
	{ src: "./content/promo_3.webp", alt: "Акция 3" },
	{ src: "./content/promo_1.webp", alt: "Акция 4" },
	{ src: "./content/promo_4.webp", alt: "Акция 5" }
];

const OurPromo = () => {
	const promoItems = useMemo(
		() =>
			PROMOS.map((promo, i) => (
				<div key={i} className={styles.our_promo__promo}>
					<img src={promo.src} alt={promo.alt} loading="lazy" />
				</div>
			)),
		[]
	);

	return (
		<section className={styles.our_promo}>
			<H2 className={styles.our_promo__title}>
				<span>Наши </span>
				<span>акции</span>
			</H2>

			<div className={styles.our_promo__content}>{promoItems}</div>

			<OvalButton className={styles.our_promo__all_promo_btn}>
				Все акции
			</OvalButton>
		</section>
	);
};

export default memo(OurPromo);
