import styles from "../../../styles/components/Products.module.sass";
import H4 from "../../../ui/H4.jsx";
import Text from "../../../ui/Text.jsx";
import Button from "../../../ui/Button.jsx";
import { useContext } from "react";
import { ModalContext } from "../../../ui/ModalProvider.jsx";
import NewTag from "../../../ui/NewTag.jsx";

const Product = ({ product, chooseProduct }) => {
	const { setProductCard } = useContext(ModalContext);
	const handleAddToCart = () => {
		if (product.type !== "pizza") {
			return; // TODO: add to cart not pizzas
		};

		chooseProduct(product);
		setProductCard(true);
	};

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
					onClickFn={handleAddToCart}
					className={styles.product__to_cart_btn}
				>
					В корзину
				</Button>
			</div>
		</div>
	);
};

export default Product;
