import { getRandomArrayElem } from "./helpers.js";

/**
 * Возвращает 4 рандомных НОВЫХ {is_new: true} продукта из массива продуктов
 * @param products [{}, {}, ...]
 * @returns array
 */
const getRandom4NewProducts = (products) => {
	if (!products) return [];

	const res = [];
	const newProducts = products?.filter((product) => product?.is_new);

	for (let i = 0; i < 4; i++) {
		res.push(getRandomArrayElem(newProducts));
	}

	return res;
};

/**
 * Возвращает список продуктов по типу
 * @param products
 * @param type
 * @returns {*}
 */
const filterProductsByType = (products, type) => {
	return products?.filter((item) => item.type === type);
};

/**
 * Форматирует продукт для добавления в корзину (продукт без дополнений)
 * @param product
 * @returns {{img_url: (string|*), additional_info: {supplements: *[], size: string, type: string}, price: (number|*), name: *, id: *, type: *}}
 */
const formatDefaultProductToCart = (product) => {
	return {
		id: product?.id,
		name: product?.name,
		img_url: product?.img_url,
		description: product.description,
		price: product?.price,
		type: product?.type,
		additional_info: {
			size: "medium",
			type: "traditional",
			supplements: []
		}
	};
};

export {
	formatDefaultProductToCart,
	filterProductsByType,
	getRandom4NewProducts
}