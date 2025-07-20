import styles from "../../../styles/components/Header.module.sass";
import Button from "../../../ui/Button.jsx";

const CartButton = () => (
	<Button
		onClickFn={() => console.log("some cart open")}
		className={styles.header__cart_btn}
	>
		Корзина | 0
	</Button>
);

export default CartButton;