import styles from "../../../styles/components/ProductCardModal.module.sass";
import H4 from "../../../ui/Titles/H4.jsx";

const ProductInfo = ({ productInfo }) => {
	const { name, sizeText, typeText, weight } = productInfo;

	return (
		<>
			<H4 className={styles.product_card_modal__product_name}>{name}</H4>
			<div className={styles.product_card_modal__product_desc}>
				<div className={styles.product_card_modal__options}>
					<span>{sizeText}</span>
					<span>{typeText}</span>
					<span>{weight}</span>
				</div>
				<div className={styles.product_card_modal__ingredients}>
					<span>моцарелла</span>
					<span>соус альфредо</span>
				</div>
			</div>
		</>
	);
};
export default ProductInfo;
