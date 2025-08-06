import styles from "../../../styles/components/Cart.module.sass";
import Supplement from "../../../ui/Other/Supplement.jsx";
import { getShortFormattedText } from "../../../utils/index.js";
import { useDispatch } from "react-redux";
import { removeFromCartById } from "../../../store/cartSlice/cartSlice.js";
import { useProductActions } from "../../../hooks/useProductActions.js";
import { useProductInCart } from "../../../hooks/useProductInCart.js";

const Sauce = ({ sauce }) => {
	const dispatch = useDispatch();
	const { handleProductClick } = useProductActions();
	const { isProductInCart } = useProductInCart();

	/**
	 * Обработчик клика
	 * @returns {*}
	 */
	const handleClick = () => {
		if (isProductInCart(sauce?.id))
			return dispatch(removeFromCartById(sauce?.id));

		handleProductClick(sauce);
	};

	return (
		<Supplement
			className={styles.cart__sauces_sauce}
			onClickFn={handleClick}
			supplement={{
				name: getShortFormattedText(sauce?.name, 20),
				img_url: sauce?.img_url,
				price: sauce?.price
			}}
			passedIsActive={isProductInCart(sauce?.id)}
		/>
	);
};

export default Sauce;
