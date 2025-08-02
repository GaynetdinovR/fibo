import styles from "../../styles/Ui.module.sass";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice/cartSlice.js";
import { formatDefaultProductToCart, getShortFormattedText } from "../../utils/index.js";

const RecommendatedProduct = ({ product }) => {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(addToCart(formatDefaultProductToCart(product)));
	};

	return (
		<button
			onClick={handleClick}
			className={styles.recommendated_product}
		>
			<div className={styles.recommendated_product__img}>
				<img src={product?.img_url} alt="recommendated_product" />
			</div>
			<span className={styles.recommendated_product__name}>
				{getShortFormattedText(product?.name, 20)}
			</span>
			<span className={styles.recommendated_product__price}>
				{product?.price}₽
			</span>
		</button>
	);
};

export default RecommendatedProduct;