import styles from "../../../styles/components/Order.module.sass";
import { TEXT_SIZES, TEXT_TYPES } from "../../../constants/product_localization.js";

const Product = ({ product }) => {
	const getInfo = () => {
		if (product?.type == "pizza") {
			return getShortAdditionalInfo(product?.additional_info);
		}

		return "Традиционный рецепт";
	};

	const getShortAdditionalInfo = (additionalInfo) => {
		const sizeInfo = TEXT_SIZES[additionalInfo.size];
		const typeInfo = TEXT_TYPES[additionalInfo.type];

		return `${sizeInfo[2]} ${sizeInfo[0]}, ${typeInfo}`;
	};

	return (
		<div className={styles.order__product}>
			<span className={styles.order__product_name}>{product?.name}</span>

			<span className={styles.order__product_price}>
				{product?.price}₽
			</span>

			<span className={styles.order__product_info}>{getInfo()}</span>
		</div>
	);
};

export default Product;
