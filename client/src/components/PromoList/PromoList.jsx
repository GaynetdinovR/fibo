import styles from "../../styles/components/PromoList.module.sass";
import PromoElem from "./components/PromoElem.jsx";
import H3 from "../../ui/H3.jsx";

const PromoList = ({promos}) => {
	return (
		<section className={styles.promo_list}>
			<H3 className={styles.promo_list__title}>Акции</H3>
			<div className={styles.promo_list__content}>
				{promos.map((promo, i) => (
					<PromoElem key={i} promo={promo} />
				))}
			</div>
		</section>
	);
};

export default PromoList;