import styles from "../../styles/components/NewProducts.module.sass";

import H4 from "../../ui/Titles/H4.jsx";
import NewProductButton from "./components/NewProductButton.jsx";
import { useContext } from "react";
import { ModalContext } from "../../ui/Providers/ModalProvider.jsx";

const TYPE_NAMES = {
	salad: "Салат",
	pizza: "Пицца",
	pasta: "Паста",
	snack: "Закуска",
	soup: "Суп"
};

const NewProducts = ({ chooseProduct, newProducts }) => {
	return (
		<aside className={styles.new_products}>
			<H4 className={styles.new_products__title}>Новинки</H4>
			<div className={styles.new_products__content}>
				{newProducts.map((product, i) => (
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

export default NewProducts;
