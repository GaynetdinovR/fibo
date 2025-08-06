import H3 from "../../ui/Titles/H3.jsx";
import styles from "../../styles/components/Cart.module.sass";
import Recommendations from "./components/Recommendations.jsx";
import Sauces from "./components/Sauces.jsx";
import ControlSection from "./components/ControlSection.jsx";
import Products from "./components/Products.jsx";
import { useSelector } from "react-redux";
import { memo, useEffect, useState } from "react";
import { getCartSum } from "../../utils/index.js";
const Cart = () => {
	const cart = useSelector(state => state.cart);
	const [totalSum, setTotalSum] = useState(0);

	useEffect(() => {
		setTotalSum(getCartSum(cart));
	}, [cart]);

	return (
		<section className={styles.cart}>
			<H3 className={styles.cart__title}>Корзина</H3>
			<Products cart={cart} />
			<Recommendations cart={cart} />
			<Sauces setTotalSum={setTotalSum} />
			<ControlSection setTotalSum={setTotalSum} totalSum={totalSum} />
		</section>
	);
};

export default memo(Cart);