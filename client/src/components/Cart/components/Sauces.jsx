import styles from "../../../styles/components/Cart.module.sass";
import { useSelector } from "react-redux";
import { filterProductsByType } from "../../../utils/index.js";
import Sauce from "./Sauce.jsx";
import H4 from "../../../ui/Titles/H4.jsx";

const Sauces = ({ setTotalSum }) => {
	const products = useSelector(state => state.products);
	const sauces = filterProductsByType(products, "sauce");

	return (
		<div className={styles.cart__sauces}>
			<H4 className={styles.cart__sauces_title}>Соусы к бортикам и закускам</H4>
			<div className={styles.cart__sauces_content}>
				{sauces.map((sauce, i) => (
					<Sauce setTotalSum={setTotalSum} sauce={sauce} key={i} />
				))}
			</div>
		</div>
	);
};

export default Sauces;