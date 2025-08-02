import styles from "../../../styles/components/CartMenu.module.sass";

import QuantitySelector from "../../../ui/Other/QuantitySelector.jsx";
import DeleteCrossButton from "../../../ui/Buttons/DeleteCrossButton.jsx";
import H5 from "../../../ui/Titles/H5.jsx";

import { useDispatch } from "react-redux";
import {
	removeFromCartById,
	setProductCountById
} from "../../../store/cartSlice/cartSlice.js";
import { roundToTwo } from "../../../utils/index.js";

const Product = ({ product }) => {
	const dispatch = useDispatch();

	/**
	 * Оболочка для изменения количества продукта
	 * @param val
	 */
	const setCountWrap = (val) => {
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
				onClickFn={handleDeletebtn}
				className={styles.cart_menu__product_delete_btn}
			/>

			<div className={styles.cart_menu__product_img}>
				<img src={product?.img_url} alt="product" />
			</div>

			<H5 className={styles.cart_menu__product_name}>{product?.name}</H5>

			<div className={styles.cart_menu__product_bottom_side}>
				<QuantitySelector
					count={product?.count}
					setCount={setCountWrap}
					className={styles.cart_menu__product_quantity_selector}
					min={1}
					max={20}
				/>

				<div className={styles.cart_menu__product_price}>
					{roundToTwo(product?.price * product?.count)}₽
				</div>
			</div>
		</div>
	);
};

export default Product;
