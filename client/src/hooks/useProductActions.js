import { useDispatch } from "react-redux";
import { useProductInCart } from "./useProductInCart.js";
import { formatDefaultProductToCart } from "../utils/index.js";
import { addToCart } from "../store/cartSlice/cartSlice.js";
import { useCallback } from "react";

export const useProductActions = () => {
	const dispatch = useDispatch();
	const { isProductInCart } = useProductInCart();

	/**
	 * Обработка не-пиццы
	 */
	const handleNonPizzaProduct = useCallback(
		(product) => {
			dispatch(addToCart(formatDefaultProductToCart(product)));
		},
		[dispatch]
	);

	/**
	 * Обработка пиццы
	 */
	const handlePizzaProduct = useCallback(
		(product, { chooseProduct, setProductCard }) => {
			chooseProduct(product);
			setProductCard(true);
		},
		[]
	);

	/**
	 * Основной обработчик клика
	 */
	const handleProductClick = useCallback(
		(product, callbacks = {}) => {
			if (!product || isProductInCart(product.id)) return;

			product.type === "pizza"
				? handlePizzaProduct(product, callbacks)
				: handleNonPizzaProduct(product);
		},
		[isProductInCart, handlePizzaProduct, handleNonPizzaProduct]
	);

	return {
		handleProductClick,
		handlePizzaProduct,
		handleNonPizzaProduct
	};
};
