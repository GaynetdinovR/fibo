import styles from "../../../styles/components/Cart.module.sass";
import Supplement from "../../../ui/Supplement.jsx";
import { formatDefaultProductToCart, getShortFormattedName } from "../../../utils/functions.js";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCartById } from "../../../store/cartSlice/cartSlice.js";
import { useProductActions } from "../../../utils/useProductActions.js";
import { useProductInCart } from "../../../utils/useProductInCart.js";

const Sauce = ({ sauce }) => {
	const dispatch = useDispatch();
	const { handleProductClick } = useProductActions();
	const { isProductInCart } = useProductInCart();

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
				name: getShortFormattedName(sauce?.name),
				img_url: sauce?.img_url,
				price: sauce?.price
			}}
			passedIsActive={isProductInCart(sauce?.id)}
		/>
	);
};

export default Sauce;
