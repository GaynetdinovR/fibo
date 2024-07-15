import styles from "../../styles/components/Products.module.sass";
import H3 from "../../ui/H3.jsx";
import Product from "./components/Product.jsx";

const Products = ({ products }) => {
	const types = [
		{ type: "pizza", title: "Пиццы" },
		{ type: "pasta", title: "Пасты" },
		{ type: "salad", title: "Салаты" },
		{ type: "snack", title: "Закуски" },
		{ type: "drink", title: "Напитки" }
	];

	return (
		<section className={styles.products}>
			<div className={styles.products__categories}>
				{types.map((type, i) => (
					<div key={i} className={styles.products__category}>
						<H3 className={styles.products__title}>{type.title}</H3>
						<div className={styles.products__category_content}>
							{products
								?.filter((product) => product.type === type.type)
								.map((product, k) => (
									<Product key={k} product={product} />
								))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Products;
