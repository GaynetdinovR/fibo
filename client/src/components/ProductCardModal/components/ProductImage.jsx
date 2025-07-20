import styles from "../../../styles/components/ProductCardModal.module.sass";
import NewTag from "../../../ui/NewTag.jsx";

const ProductImage = ({ imgUrl, isNew }) => {
	return (
		<div className={styles.product_card_modal__img}>
			<img src={imgUrl} alt="product_img" />
			{isNew ? <NewTag className={styles.product_card_modal__new_tag}/> : null}
		</div>
	);
};

export default ProductImage;