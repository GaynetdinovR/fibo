import styles from "../../../styles/components/Cart.module.sass";
import H5 from "../../../ui/Titles/H5.jsx";
import QuantitySelector from "../../../ui/Other/QuantitySelector.jsx";
import { roundToTwo } from "../../../utils/index.js";
import DeleteCrossButton from "../../../ui/Buttons/DeleteCrossButton.jsx";
import Text from "../../../ui/TextElements/Text.jsx";
import {
	removeFromCartById,
	setProductCountById
} from "../../../store/cartSlice/cartSlice.js";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
	const dispatch = useDispatch();

	/**
	 * Обработчик удаления
	 */
	const handleDeletebtn = () => {
		dispatch(removeFromCartById(product?.id));
	};

	/**
	 * Оболочка для установки количества продукта
	 * @param val
	 */
	const setCountWrap = (val) => {
		dispatch(setProductCountById({ id: product?.id, count: val }));
	};

	return (
		<div className={styles.cart__product}>
			<div className={styles.cart__product_img}>
				<img src={product?.img_url} alt="product" />
			</div>

			<div className={styles.cart__product_info}>
				<H5 className={styles.cart__product_name}>{product?.name}</H5>

				<Text className={styles.cart__product_description}>
					{product?.description !== "-" && product?.description}
				</Text>
			</div>

			<div className={styles.cart__product_control}>
				<DeleteCrossButton
					onClickFn={handleDeletebtn}
					className={styles.cart__product_delete_btn}
				/>

				<QuantitySelector
					count={product?.count}
					setCount={setCountWrap}
					className={styles.cart__product_quantity_selector}
					min={1}
					max={20}
				/>

				<div className={styles.cart__product_price}>
					{roundToTwo(product?.price * product?.count)}₽
				</div>
			</div>
		</div>
	);
};

export default Product;
