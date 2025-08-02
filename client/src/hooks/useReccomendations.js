import { useSelector } from "react-redux";
import { useCallback } from "react";
import { filterProductsByType, getRandomArrayElem } from "../utils/index.js";

const PRODUCT_TYPES = {
	PIZZA: "pizza",
	PASTA: "pasta",
	SALAD: "salad",
	SNACK: "snack",
	SOUP: "soup",
	SAUCE: "sauce",
	DRINK: "drink",
	SUPPLEMENT: "supplement"
};

// Итоговое число рекомендаций
const COUNT_OF_RECOMMENDATIONS = 4;
const EMPTY_CART_RECOMMENDATION_TYPES = [
	PRODUCT_TYPES.PIZZA,
	PRODUCT_TYPES.PASTA,
	PRODUCT_TYPES.SALAD,
	PRODUCT_TYPES.SNACK
];

// Правила приоритета для рекомендаций
const PRIORITY_RULES = [
	{
		condition: hasType(PRODUCT_TYPES.PIZZA),
		typesToSuggest: [PRODUCT_TYPES.SNACK]
	},
	{
		condition: hasType(PRODUCT_TYPES.PASTA),
		typesToSuggest: [PRODUCT_TYPES.SALAD, PRODUCT_TYPES.DRINK]
	},
	{
		condition: hasType(PRODUCT_TYPES.SOUP),
		typesToSuggest: [PRODUCT_TYPES.SALAD, PRODUCT_TYPES.DRINK]
	},
	{
		condition: hasType(PRODUCT_TYPES.DRINK),
		typesToSuggest: [PRODUCT_TYPES.SNACK]
	},
	{
		condition: hasType(PRODUCT_TYPES.SALAD),
		typesToSuggest: [PRODUCT_TYPES.SOUP, PRODUCT_TYPES.PASTA]
	}
];

function hasType(type) {
	return (types) => types.includes(type);
}


/**
 * Система рекомендаций, зависящая от наличия продуктов в корзине, подбирает подходящие под корзину рекомендации
 * @returns {{generateRecommendationsByCart: ((function([]=): ([]))|*)}}
 */
export const useRecommendations = () => {
	const products = useSelector((state) => state.products);

	// Доступные для рекомендации типы продуктов
	const availableProducts = products.filter(
		(product) => product.type !== PRODUCT_TYPES.SUPPLEMENT
	);

	/**
	 * Возвращает рандомный продукт по типу
	 */
	const getRandomProductByType = useCallback(
		(type, cart = []) => {
			const filteredByType = filterProductsByType(
				availableProducts,
				type
			);
			const availableProductsByType = filteredByType.filter(
				(product) => !cart.some((item) => item.id === product.id)
			);
			return getRandomArrayElem(availableProductsByType);
		},
		[availableProducts]
	);

	/**
	 * Возвращает рекомендации при пустой корзине
	 * @type {function(): *[]}
	 */
	const getEmptyCartRecommendations = useCallback(() => {
		const recommendations = [];

		for (const type of EMPTY_CART_RECOMMENDATION_TYPES) {
			if (recommendations.length >= COUNT_OF_RECOMMENDATIONS) break;
			const product = getRandomProductByType(type);
			if (product) recommendations.push(product);
		}

		return recommendations;
	}, [getRandomProductByType]);

	/**
	 * Возвращает рекомендации согласно корзине в два этапа
	 * 1. Подбор наиболее подходящих продуктов для корзины (только пицца -> снеки и т.д)
	 * 2. При недоборе продуктов для рекомендации, добавляет случайные продукты
	 * @type {(function([]=): (*[]))|*}
	 */
	const generateRecommendationsByCart = useCallback(
		(cart = []) => {
			if (!cart.length) return getEmptyCartRecommendations();

			const cartTypes = [...new Set(cart.map((item) => item.type))];
			const recommendations = [];

			for (const rule of PRIORITY_RULES) {
				if (rule.condition(cartTypes)) {
					for (const type of rule.typesToSuggest) {
						if (!cartTypes.includes(type)) {
							const product = getRandomProductByType(type, cart);
							if (product) recommendations.push(product);
							if (
								recommendations.length >=
								COUNT_OF_RECOMMENDATIONS
							) {
								return recommendations;
							}
						}
					}
				}
			}

			// Любые типы продуктов, кроме соусов и добавок
			const remainingTypes = Object.values(PRODUCT_TYPES).filter(
				(type) =>
					type !== PRODUCT_TYPES.SUPPLEMENT &&
					type !== PRODUCT_TYPES.SAUCE &&
					!cartTypes.includes(type)
			);

			for (const type of remainingTypes) {
				if (recommendations.length >= COUNT_OF_RECOMMENDATIONS) break;
				const product = getRandomProductByType(type, cart);
				if (product) recommendations.push(product);
			}

			return recommendations.slice(0, COUNT_OF_RECOMMENDATIONS);
		},
		[getRandomProductByType, getEmptyCartRecommendations]
	);

	return { generateRecommendationsByCart };
};
