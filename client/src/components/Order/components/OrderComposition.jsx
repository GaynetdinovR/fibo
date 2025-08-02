import styles from "../../../styles/components/Order.module.sass";
import H5 from "../../../ui/Titles/H5.jsx";
import Product from "./Product.jsx";
import { getCartSum, roundToTwo } from "../../../utils/index.js";

const OrderComposition = ({cart}) => {

	return (
		<aside className={styles.order__composition}>
			<H5 className={styles.order__composition_title}>Состав заказа</H5>
			<div className={styles.order__composition_content}>
				{cart.map((product, i) => (
					<Product product={product} key={i} />
				))}
			</div>
			<div className={styles.order__composition_sum}>
				<span>Сумма заказа</span>
				<span>{roundToTwo(getCartSum(cart))}₽</span>
			</div>
			<div className={styles.order__composition_delivery_sum}>
				Бесплатная доставка
			</div>
		</aside>
	);
};

export default OrderComposition;