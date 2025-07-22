import styles from "../../../styles/components/CartMenu.module.sass";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice/cartSlice.js";
import { formatDefaultProductToCart } from "../../../utils/functions.js";
import { useState } from "react";
import { useProductInCart } from "../../../utils/useProductInCart.js";

const RecommendatedProduct = ({ product }) => {
	const dispatch = useDispatch();
	const { isProductInCart } = useProductInCart();

	const handleClick = () => {
		dispatch(addToCart(formatDefaultProductToCart(product)));
	};
	const getFormattedName = () => {
		if (product?.name.length > 20) return product?.name.slice(0, 17) + "...";

		return product?.name;
	};

	return (
		<button
			onClick={handleClick}
			className={styles.cart_menu__recommendated_product}
		>
			<div className={styles.cart_menu__recommendated_product_img}>
				<img src={product?.img_url} alt="recommendated_product" />
			</div>
			<span className={styles.cart_menu__recommendated_product_name}>
				{getFormattedName()}
			</span>
			<span className={styles.cart_menu__recommendated_product_price}>
				{product?.price}₽
			</span>
		</button>
	);
};

export default RecommendatedProduct;