import { useMemo, useRef, useEffect } from 'react';

/**
 * Хук отвечает за обновление рекомендаций,
 * обновляет их только при добавлении товара в корзину
 * @param cart
 * @param generateRecommendationsByCart
 * @returns {null}
 */
export const useRecommendationsUpdate = (cart, generateRecommendationsByCart) => {
	const prevIdsRef = useRef(new Set());
	const isInitialMount = useRef(true);
	const recommendationsRef = useRef(null);

	return useMemo(() => {
		const currentIds = new Set(cart.map(item => item.id));

		if (
			isInitialMount.current ||
			[...currentIds].some((id) => !prevIdsRef.current.has(id))
		) {
			recommendationsRef.current = generateRecommendationsByCart(cart);
			prevIdsRef.current = currentIds;
			isInitialMount.current = false;
		}

		return recommendationsRef.current;
	}, [cart, generateRecommendationsByCart]);
};