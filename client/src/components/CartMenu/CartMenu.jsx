import styles from "../../styles/components/CartMenu.module.sass";

import { useSelector } from "react-redux";
import { Fragment, memo } from "react";

import Product from "./components/Product.jsx";
import NoProducts from "./components/NoProducts.jsx";
import RouterLink from "../../ui/TextElements/RouterLink.jsx";
import Recommendations from "./components/Recommendations.jsx";
import DivideLine from "./components/DivideLine.jsx";
import { getCartSum, roundToTwo } from "../../utils/index.js";

const CartMenu = () => {
	const cart = useSelector((state) => state.cart);

	const isCartEmpty = cart.length === 0;
	const isCartHasMoreThanTwoProducts = cart.length > 2;

	/**
	 * Возвращает локализованный текст оставшихся позиций
	 * @returns {string}
	 */
	const getRemainText = () => {
		const remainCount = cart.length - 2;
		const text = `Еще ${remainCount}`;

		if (remainCount === 1) return `${text} позиция`;
		if (remainCount < 5 && remainCount >= 2) return `${text} позиции`;
		if (remainCount >= 5) return `${text} позиций`;
	};

	return (
		<div className={styles.cart_menu}>
			<div className={styles.cart_menu__products}>
				{!isCartEmpty ? (
					cart.slice(-2)
						.reverse()
						.map((product, i) => (
							<Fragment key={i}>
								<Product product={product} />
								<DivideLine />
							</Fragment>
						))
				) : (
					<>
						<NoProducts />
						<DivideLine />
					</>
				)}
			</div>

			{!isCartEmpty && (
				<>
					<div className={styles.cart_menu__remain_products}>
						{isCartHasMoreThanTwoProducts && (
							<span>{getRemainText()}</span>
						)}

						<RouterLink
							to={"/cart"}
							className={styles.cart_menu__open_cart_link}
						>
							Открыть корзину
						</RouterLink>
					</div>

					<div className={styles.cart_menu__sum}>
						<span>Сумма заказа</span>
						<span>{roundToTwo(getCartSum(cart))}₽</span>
					</div>

					<DivideLine />
				</>
			)}

			<div className={styles.cart_menu__recommendations}>
				<span className={styles.cart_menu__recommendations_title}>
					{isCartEmpty ? "Добавить в корзину?" : "Добавить к заказу?"}
				</span>
				<Recommendations cart={cart} />
			</div>
		</div>
	);
};

export default memo(CartMenu);
