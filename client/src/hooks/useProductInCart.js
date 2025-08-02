import { shallowEqual, useSelector } from "react-redux";
import { useCallback } from "react";

/**
 * Возвращает данные о продукте из корзины
 * @returns {{productInCart: *, isInCart: *}}
 */
export const useProductInCart = () => {
	const cart = useSelector((state) => state.cart, shallowEqual);

	const isProductInCart = useCallback(
		(productId) => cart.some(item => item.id === productId),
		[cart]
	);

	const getProductCount = useCallback(
		(productId) => cart.find(item => item.id === productId)?.count || 0,
		[cart]
	);

	return {
		isProductInCart,
		getProductCount
	};
};