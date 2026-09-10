import { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
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

// Настройки рекомендаций
const COUNT_OF_RECOMMENDATIONS = 4;
const NOT_RECOMMEND = [PRODUCT_TYPES.SUPPLEMENT, PRODUCT_TYPES.SAUCE];
const EMPTY_CART_PRIORITY_TYPES = [
	PRODUCT_TYPES.PIZZA,
	PRODUCT_TYPES.PASTA,
	PRODUCT_TYPES.SALAD,
	PRODUCT_TYPES.SNACK
];

// Правила рекомендаций
const RECOMMENDATION_RULES = {
	[PRODUCT_TYPES.PIZZA]: [PRODUCT_TYPES.SNACK, PRODUCT_TYPES.DRINK],
	[PRODUCT_TYPES.PASTA]: [PRODUCT_TYPES.SALAD, PRODUCT_TYPES.DRINK],
	[PRODUCT_TYPES.SALAD]: [PRODUCT_TYPES.SOUP, PRODUCT_TYPES.PASTA],
	[PRODUCT_TYPES.SOUP]: [PRODUCT_TYPES.SALAD, PRODUCT_TYPES.DRINK],
	[PRODUCT_TYPES.DRINK]: [PRODUCT_TYPES.SNACK]
};

export const useRecommendations = () => {
	const cart = useSelector((state) => state.cart);
	const products = useSelector((state) => state.products);

	// Доступные продукты
	const getAvailableProducts = () =>
		products.filter((p) => !NOT_RECOMMEND.includes(p.type));

	/**
	 * Рекомендации для пустой корзины
	 * @returns {*[]}
	 */
	const generateEmptyCartRecommendations = (availableProducts) => {
		const recommendations = [];

		for (const type of EMPTY_CART_PRIORITY_TYPES) {
			const recommendated_products = filterProductsByType(
				availableProducts,
				type
			);

			if (recommendated_products.length > 0) {
				recommendations.push(
					getRandomArrayElem(recommendated_products)
				);
			}
		}

		console.log(recommendations);

		return recommendations;
	};

	/**
	 * Умные рекомендации на основе содержимого корзины
	 * @returns {*[]}
	 */
	const generateSmartRecommendations = (availableProducts) => {
		const cartTypes = new Set(cart.map((item) => item.type));
		const usedTypes = new Set();
		const recommendations = [];

		for (const [cartType, suggestedTypes] of Object.entries(
			RECOMMENDATION_RULES
		)) {
			if (cartTypes.has(cartType)) continue;

			for (const type of suggestedTypes) {
				if (
					!cartTypes.has(type) &&
					!usedTypes.has(type) &&
					recommendations.length < COUNT_OF_RECOMMENDATIONS
				) {
					const recommendated_products = filterProductsByType(
						availableProducts,
						type
					);

					if (recommendated_products.length > 0) {
						const recommendation = getRandomArrayElem(
							recommendated_products
						);

						recommendations.push(recommendation);
						usedTypes.add(type);
					}
				}
			}
		}

		if (recommendations.length < COUNT_OF_RECOMMENDATIONS) {
			const remainingTypes = [
				...new Set(availableProducts.map((p) => p.type))
			].filter((type) => !cartTypes.has(type) && !usedTypes.has(type));

			while (
				recommendations.length < COUNT_OF_RECOMMENDATIONS &&
				remainingTypes.length > 0
			) {
				const randomType = getRandomArrayElem(remainingTypes);
				const recommendated_products = availableProducts.filter(
					(p) =>
						p.type === randomType &&
						!cart.some((i) => i.id === p.id)
				);

				if (recommendated_products.length > 0) {
					recommendations.push(
						getRandomArrayElem(recommendated_products)
					);
				}
				remainingTypes.splice(remainingTypes.indexOf(randomType), 1);
			}
		}

		return recommendations.slice(0, COUNT_OF_RECOMMENDATIONS);
	};

	// Кеш
	const prevCartIdsRef = useRef(new Set());
	const cachedRecommendations = useRef([]);

	// Основная логика генерации рекомендаций
	return useMemo(() => {
		const currentCartIds = new Set(cart.map((item) => item.id));

		const isCartChanged =
			currentCartIds.size !== prevCartIdsRef.current.size ||
			[...currentCartIds].some((id) => !prevCartIdsRef.current.has(id));

		if (!isCartChanged) {
			return cachedRecommendations.current;
		}

		const recommendations =
			cart.length === 0
				? generateEmptyCartRecommendations(getAvailableProducts())
				: generateSmartRecommendations(getAvailableProducts());


		//TODO: костыль, переделать
		if (recommendations.length < COUNT_OF_RECOMMENDATIONS) {
			const count = COUNT_OF_RECOMMENDATIONS - recommendations.length;
			const newRecommendations = generateEmptyCartRecommendations(getAvailableProducts()).slice(0, count);

			recommendations.push(...newRecommendations);
		}

		prevCartIdsRef.current = currentCartIds;
		cachedRecommendations.current = recommendations;

		return recommendations;
	}, [cart]);
};
