import styles from "../../../styles/components/Products.module.sass";
import H4 from "../../../ui/H4.jsx";
import Text from "../../../ui/Text.jsx";
import Button from "../../../ui/Button.jsx";
import { useContext } from "react";
import { ModalContext } from "../../../ui/ModalProvider.jsx";

const Product = ({ product, chooseProduct }) => {
	const newTag = <div className={styles.product__new_tag}>NEW</div>;
	const { setProductCard } = useContext(ModalContext);

	const addToCartClicked = () => {
		if(product.type !== 'pizza') return;

		chooseProduct(product);
		setProductCard(true);
	}

	return (
		<div className={styles.products__product}>
			<div className={styles.product__top_side}>
				<div className={styles.product__img}>
					<img src={product.img_url} alt="product_img" />
					{product.is_new ? newTag : ""}
				</div>

				<div className={styles.product__info}>
					<H4 className={styles.product__name}>{product.name}</H4>

					{product.description !== "-" ? (
						<Text className={styles.product__text}>
							{" "}
							{product.description}{" "}
						</Text>
					) : null}
				</div>
			</div>

			<div className={styles.product__bottom_side}>
				<span className={styles.product__price}>{product.price} ₽</span>

				<Button
					onClickFn={() => addToCartClicked()}
					className={styles.product__to_cart_btn}
				>
					В корзину
				</Button>
			</div>
		</div>
	);
};

export default Product;
