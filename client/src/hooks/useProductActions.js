import { useDispatch } from "react-redux";
import { useProductInCart } from "./useProductInCart.js";
import { formatDefaultProductToCart } from "../utils/index.js";
import { addToCart } from "../store/cartSlice/cartSlice.js";

export const useProductActions = () => {
	const dispatch = useDispatch();
	const { isProductInCart } = useProductInCart();

	/**
	 * Обработка не-пиццы
	 */
	const handleNonPizzaProduct = (product) => {
		dispatch(addToCart(formatDefaultProductToCart(product)));
	};

	/**
	 * Обработка пиццы
	 */
	const handlePizzaProduct = (product, callbacks) => {
		const { chooseProduct, setProductCard } = callbacks;
		chooseProduct(product);
		setProductCard(true);
	};

	/**
	 * Основной обработчик клика
	 */
	const handleProductClick = (product, callbacks = {}) => {
		if (!product || isProductInCart(product.id)) return;

		product.type === "pizza"
			? handlePizzaProduct(product, callbacks)
			: handleNonPizzaProduct(product);
	};

	return {
		handleProductClick,
		handlePizzaProduct,
		handleNonPizzaProduct
	};
};