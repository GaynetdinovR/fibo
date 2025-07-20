import styles from "../../../styles/components/NewProducts.module.sass";
import H5 from "../../../ui/H5.jsx";
import { ModalContext } from "../../../ui/ModalProvider.jsx";
import { useContext } from "react";

const NewProductButton = ({ chooseProduct, product }) => {
	const { setProductCard } = useContext(ModalContext);

	const handleClick = () => {
		if (product?.type !== "pizza") {
			return; // TODO: add to cart not pizzas
		};

		chooseProduct(product);
		setProductCard(true);
	};

	return (
		<button onClick={handleClick} className={styles.new_products__new_product}>
			<div className={styles.new_product__img}>
				<img src={product?.img_url} alt="product" />
			</div>
			<div className={styles.new_product__info}>
				<H5 className={styles.new_product__name}>
					{product?.type_text}
				</H5>
				<span className={styles.new_product__price}>
					{product?.price} ₽
				</span>
			</div>
		</button>
	);
};

export default NewProductButton;
