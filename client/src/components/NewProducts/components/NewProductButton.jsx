import styles from "../../../styles/components/NewProducts.module.sass";
import H5 from "../../../ui/Titles/H5.jsx";
import { ModalContext } from "../../../ui/Providers/ModalProvider.jsx";
import { useContext } from "react";
import { useProductActions } from "../../../hooks/useProductActions.js";

const NewProductButton = ({ chooseProduct, product }) => {
	const { setProductCard } = useContext(ModalContext);
	const { handleProductClick } = useProductActions();

	const handleClick = () => {
		const callbacks = {
			setProductCard: setProductCard,
			chooseProduct: chooseProduct
		};

		handleProductClick(product, callbacks);
	};

	if (!product) return null;

	return (
		<button
			onClick={handleClick}
			className={styles.new_products__new_product}
		>
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
