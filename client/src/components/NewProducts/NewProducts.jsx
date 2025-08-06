import styles from "../../styles/components/NewProducts.module.sass";

import H4 from "../../ui/Titles/H4.jsx";
import NewProductButton from "./components/NewProductButton.jsx";
import { memo, useMemo } from "react";

const TYPE_NAMES = {
	salad: "Салат",
	pizza: "Пицца",
	pasta: "Паста",
	snack: "Закуска",
	soup: "Суп"
};

const NewProducts = ({ chooseProduct, newProducts }) => {
	const proceedProducts = useMemo(
		() =>
			newProducts.map((product) => ({
				...product,
				type_text: TYPE_NAMES[product?.type]
			})),
		[newProducts]
	);

	return (
		<aside className={styles.new_products}>
			<H4 className={styles.new_products__title}>Новинки</H4>
			<div className={styles.new_products__content}>
				{proceedProducts.map((product, i) => (
					<NewProductButton
						chooseProduct={chooseProduct}
						product={{
							...product,
							type_text: TYPE_NAMES[product?.type]
						}}
						key={i}
					/>
				))}
			</div>
		</aside>
	);
};

export default memo(NewProducts);
