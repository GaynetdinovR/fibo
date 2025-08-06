import styles from "../../styles/components/Products.module.sass";

import H3 from "../../ui/Titles/H3.jsx";
import Product from "./components/Product.jsx";
import { filterProductsByType } from "../../utils/index.js";
import { memo, useMemo } from "react";

const PRODUCT_CATEGORIES = [
	{ type: "pizza", title: "Пиццы" },
	{ type: "pasta", title: "Пасты" },
	{ type: "soup", title: "Супы" },
	{ type: "salad", title: "Салаты" },
	{ type: "snack", title: "Закуски" },
	{ type: "drink", title: "Напитки" }
];

const Products = ({ products, chooseProduct }) => {
	const categoriesWithProducts = useMemo(
		() =>
			PRODUCT_CATEGORIES.map((category) => {
				const categoryProducts = filterProductsByType(
					products,
					category.type
				);

				return categoryProducts.length
					? { ...category, products: categoryProducts }
					: null;
			}).filter(Boolean),
		[products]
	);

	return (
		<section className={styles.products}>
			<div className={styles.products__categories}>
				{categoriesWithProducts.map((category, i) => (
					<article
						id={category.type}
						key={i}
						className={styles.products__category}
					>
						<H3 className={styles.products__title}>
							{category.title}
						</H3>

						<div className={styles.products__category_content}>
							{category.products.map((product) => (
								<Product
									key={`product-${product.id}`}
									product={product}
									chooseProduct={chooseProduct}
								/>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default memo(Products);
