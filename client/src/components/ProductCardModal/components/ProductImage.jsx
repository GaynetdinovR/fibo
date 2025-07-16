import styles from "../../../styles/components/ProductCardModal.module.sass";

const ProductImage = ({ imgUrl, isNew }) => {
	return (
		<div className={styles.product_card_modal__img}>
			<img src={imgUrl} alt="product_img" />
			{isNew ? <div className={styles.product_card_modal__new_tag}>NEW</div> : null}
		</div>
	);
};

export default ProductImage;