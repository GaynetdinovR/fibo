import styles from "../../../styles/components/NewProducts.module.sass";
import H5 from "../../../ui/H5.jsx";
import { ModalContext } from "../../../ui/ModalProvider.jsx";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice/cartSlice.js";
import { formatDefaultProductToCart } from "../../../utils/functions.js";
import { useProductInCart } from "../../../utils/useProductInCart.js";

const NewProductButton = ({ chooseProduct, product }) => {
	const { setProductCard } = useContext(ModalContext);
	const dispatch = useDispatch();

	const { isProductInCart } = useProductInCart();

	/**
	 * Действия, если продукт - не пицца
	 */
	const handleNonPizzaProduct = () => {
		dispatch(addToCart(formatDefaultProductToCart(product)));
	};

	/**
	 * Действия, если продукт - пицца
	 */
	const handlePizzaProduct = () => {
		chooseProduct(product);
		setProductCard(true);
	};

	/**
	 * Обработчик клика
	 */
	const handleClick = () => {
		if (!product || isProductInCart(product?.id)) return;

		product.type === "pizza"
			? handlePizzaProduct()
			: handleNonPizzaProduct();
	};

	return (
		<button onClick={handleClick} className={styles.new_products__new_product}>
			<div className={styles.new_product__img}>
				<img src={product?.img_url} alt="product" />
			</div>
			<div className={styles.new_product__info}>
				<H5 className={styles.new_product__name}>
					{product?.type_text}
				</H5>
				<span className={styles.new_product__price}>
					{product?.price} ₽
				</span>
			</div>
		</button>
	);
};

export default NewProductButton;
