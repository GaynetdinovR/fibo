import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { MenuContext } from "../../../ui/MenuProvider.jsx";
import RouterLink from "../../../ui/RouterLink.jsx";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
	const { isCartOpen, setCart } = useContext(MenuContext);
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();

	const isSmallDisplay = window.innerWidth < 620;

	const handleCartBtnClick = () => {
		if (!isSmallDisplay) return setCart(!isCartOpen);

		navigate("/cart");
	};

	return (
		<Button
			onClickFn={handleCartBtnClick}
			className={styles.header__cart_btn}
		>
			Корзина | {cart.length}
		</Button>
	);
};

export default CartButton;
