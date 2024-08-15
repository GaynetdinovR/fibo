import styles from "../../../styles/components/PromoList.module.sass";
import Button from "../../../ui/Button.jsx";
import H4 from "../../../ui/H4.jsx";
import Text from "../../../ui/Text.jsx";

const PromoElem = ({ promo }) => {
	return (
		<div className={styles.promo_list__promo}>
			<div className={styles.promo_list__promo_img}>
				<img src={promo.img_url} alt="promo" />
			</div>
			<div className={styles.promo_list__promo_info}>
				<H4 className={styles.promo_list__promo_title}>
					{promo.title}
				</H4>
				<Text className={styles.promo_list__promo_text}>
					{promo.text}
				</Text>
			</div>
			<Button className={styles.promo_list__promo_btn}>
				Посмотреть
			</Button>
		</div>
	);
};

export default PromoElem;
