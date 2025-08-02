import { roundToTwo } from "./helpers.js";

/**
 * Возвращает сумму корзины
 * @param cart [{price: number}, ...]
 * @returns {*}
 */
const getCartSum = (cart) => {
	return cart.reduce((sum, product) => sum + (product?.price * product?.count), 0);
};

/**
 * Возвращает сумму со скидкой
 * @param startSum number
 * @param discount 0 < number < 1
 * @returns {number}
 */
const getSumWithDiscount = (startSum, discount) => {
	return roundToTwo(startSum * (1 - discount));
};

export {
	getCartSum,
	getSumWithDiscount
};
