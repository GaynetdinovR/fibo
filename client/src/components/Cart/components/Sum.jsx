import styles from "../../../styles/components/Cart.module.sass";
import { roundToTwo } from "../../../utils/index.js";
const Sum = ({totalSum}) => {
	return (
		<div className={styles.cart__control_sum}>
			<span>Сумма заказа:</span>
			<span>{roundToTwo(totalSum)}₽</span>
		</div>
	);
};

export default Sum;