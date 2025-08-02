import styles from "../../../styles/components/Products.module.sass";
import H4 from "../../../ui/Titles/H4.jsx";
import Text from "../../../ui/TextElements/Text.jsx";
import Button from "../../../ui/Buttons/Button.jsx";
import { useCallback, useContext } from "react";
import { ModalContext } from "../../../ui/Providers/ModalProvider.jsx";
import NewTag from "../../../ui/Other/NewTag.jsx";
import { useProductActions } from "../../../hooks/useProductActions.js";
import { useProductInCart } from "../../../hooks/useProductInCart.js";

const Product = ({ product, chooseProduct }) => {
	const { setProductCard } = useContext(ModalContext);

	const { isProductInCart } = useProductInCart();
	const { handleProductClick } = useProductActions();

	/**
	 * Обработчик клика
	 */
	const handleClick = useCallback(() => {
		handleProductClick(product, {
			chooseProduct,
			setProductCard
		});
	}, [product, chooseProduct, setProductCard, handleProductClick]);

	const hasDescription = product.description && product.description !== "-";

	return (
		<div className={styles.products__product}>
			<div className={styles.product__top_side}>
				<div className={styles.product__img}>
					<img src={product.img_url} alt="product_img" />
					{!!product.is_new && (
						<NewTag className={styles.product__new_tag} />
					)}
				</div>

				<div className={styles.product__info}>
					<H4 className={styles.product__name}>{product.name}</H4>

					{hasDescription && (
						<Text className={styles.product__text}>
							{product.description}
						</Text>
					)}
				</div>
			</div>

			<div className={styles.product__bottom_side}>
				<span className={styles.product__price}>{product.price} ₽</span>

				<Button
					isDisabled={isProductInCart(product.id)}
					onClickFn={handleClick}
					className={styles.product__to_cart_btn}
				>
					{!isProductInCart(product.id) ? 'В корзину' : 'Добавлено'}
				</Button>
			</div>
		</div>
	);
};

export default Product;
