import styles from "../../styles/components/NewProducts.module.sass";
import H4 from "../../ui/H4.jsx";
import H5 from "../../ui/H5.jsx";
import { getRandom4NewProducts } from "../../scripts/functions.js";

const NewProducts = ({ newProducts }) => {
	const typeName = {
		salad: "Салат",
		pizza: "Пицца",
		pasta: "Паста",
		snack: "Закуска",
		soup: "Суп"
	};

	return (
		<aside className={styles.new_products}>
			<H4 className={styles.new_products__title}>Новинки</H4>
			<div className={styles.new_products__content}>
				{newProducts.map((product, i) => (
					<button
						className={styles.new_products__new_product}
						key={i}
					>
						<div className={styles.new_product__img}>
							<img src={product?.img_url} alt="product" />
						</div>
						<div className={styles.new_product__info}>
							<H5 className={styles.new_product__name}>
								{typeName[product?.type]}
							</H5>
							<span className={styles.new_product__price}>
								{product?.price} ₽
							</span>
						</div>
					</button>
				))}
			</div>
		</aside>
	);
};

export default NewProducts;
