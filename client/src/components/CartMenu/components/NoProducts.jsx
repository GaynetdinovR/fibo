import styles from "../../../styles/components/CartMenu.module.sass";
const NoProducts = () => {
	return (
		<div className={styles.cart_menu__no_products}>
			<span>Корзина пуста</span>
		</div>
	);
};

export default NoProducts;