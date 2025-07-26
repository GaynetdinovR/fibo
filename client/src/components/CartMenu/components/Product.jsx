import styles from "../../../styles/components/CartMenu.module.sass";
import { useState } from "react";
import QuantitySelector from "../../../ui/QuantitySelector.jsx";
import H5 from "../../../ui/H5.jsx";
import { useDispatch } from "react-redux";
import {
	removeFromCartById,
	setProductCountById
} from "../../../store/cartSlice/cartSlice.js";
import { roundToTwo } from "../../../utils/functions.js";
import DeleteCrossButton from "../../../ui/DeleteCrossButton.jsx";

const Product = ({ product }) => {
	const [localCount, setLocalCount] = useState(product?.count);
	const dispatch = useDispatch();

	/**
	 * Оболочка для изменения количества продукта
	 * @param val
	 */
	const setLocalCountWrap = (val) => {
		setLocalCount(val);

		dispatch(setProductCountById({ id: product?.id, count: val }));
	};

	/**
	 * Обработчик удаления
	 */
	const handleDeletebtn = () => {
		dispatch(removeFromCartById(product?.id));
	};

	return (
		<div className={styles.cart_menu__product}>
			<DeleteCrossButton
				onClick={handleDeletebtn}
				className={styles.cart_menu__product_delete_btn}
			/>

			<div className={styles.cart_menu__product_img}>
				<img src={product?.img_url} alt="product" />
			</div>

			<H5 className={styles.cart_menu__product_name}>{product?.name}</H5>

			<div className={styles.cart_menu__product_bottom_side}>
				<QuantitySelector
					count={localCount}
					setCount={setLocalCountWrap}
					className={styles.cart_menu__product_quantity_selector}
					min={1}
					max={20}
				/>

				<div className={styles.cart_menu__product_price}>
					{roundToTwo(product?.price * localCount)}₽
				</div>
			</div>
		</div>
	);
};

export default Product;
