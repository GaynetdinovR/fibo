import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../ui/Providers/ModalProvider.jsx";
import { formatDefaultProductToCart, roundToTwo } from "../../utils/index.js";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice/cartSlice.js";

import styles from "../../styles/components/ProductCardModal.module.sass";

import Modal from "../../ui/Templates/Modal.jsx";
import Button from "../../ui/Buttons/Button.jsx";
import Supplements from "./components/Supplements.jsx";
import ProductImage from "./components/ProductImage.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import SizeTypeSelector from "./components/SizeTypeSelector.jsx";

import { TEXT_SIZES, TEXT_TYPES } from "../../constants/product_localization.js";

const INIT_SIZES = [
	{ id: "small", active: false },
	{ id: "medium", active: true },
	{ id: "large", active: false }
];

const INIT_TYPES = [
	{ id: "traditional", active: true },
	{ id: "thin", active: false }
];

const INIT_SUPPLEMENTS = (supplementsData) =>
	supplementsData.reduce(
		(acc, item) => ({
			...acc,
			[item.supplement_id]: false
		}),
		{}
	);

const ProductCardModal = ({ product, supplementsData }) => {
	const { setProductCard, isProductCardOpen } = useContext(ModalContext);
	const [setOpen, isOpen] = [setProductCard, isProductCardOpen];

	const dispatch = useDispatch();

	// Variables

	const [sizes, setSizes] = useState(INIT_SIZES);

	const [types, setTypes] = useState(INIT_TYPES);

	const [supplements, setSupplements] = useState(INIT_SUPPLEMENTS(supplementsData));

	const [totalPrice, setTotalPrice] = useState(0);

	/**
	 * Расчет итоговой цены, меняется при выборе дополнений к пицце или изменении размера
	 */
	useEffect(() => {
		const activeSize = sizes.find((size) => size.active);
		let basePrice = product?.price || 0;

		if (activeSize.id == "small") basePrice -= 200;
		if (activeSize.id == "large") basePrice += 200;

		const supplementsPrice = Object.entries(supplements).reduce(
			(sum, [id, isActive]) => {
				if (isActive) {
					const supplement = supplementsData.find(
						(item) => item.supplement_id === id
					);
					return sum + (supplement?.price || 0);
				}
				return sum;
			},
			0
		);

		setTotalPrice(roundToTwo(basePrice + supplementsPrice));
	}, [sizes, supplements, product, supplementsData]);

	/**
	 * Обработчик изменения размера/типа пиццы
	 * @param clickedId size/type id
	 */
	const handleTypeOrSizeClick = (clickedId) => {
		const sizeIndex = sizes.findIndex((size) => size.id === clickedId);
		const typeIndex = types.findIndex((type) => type.id === clickedId);

		if (sizeIndex >= 0) {
			setSizes(
				sizes.map((size, i) => ({
					...size,
					active: i === sizeIndex
				}))
			);
		}

		if (typeIndex >= 0) {
			setTypes(
				types.map((type, i) => ({
					...type,
					active: i === typeIndex
				}))
			);
		}
	};

	/**
	 * Возвращает массив выбранных добавок
	 */
	const getChosenSupplements = () => {
		return Object.entries(supplements)
			.filter(([key, status]) => status === true)
			.map(([key]) => key);
	};

	/**
	 * Сбрасывает введенные данные
	 */
	const reset = () => {
		setSizes(INIT_SIZES);
		setTypes(INIT_TYPES);
		setSupplements(INIT_SUPPLEMENTS(supplementsData));
	};

	/**
	 * Обработчик добавления в корзину
	 */
	const handleAddToCartBtn = () => {
		const productToCart = formatDefaultProductToCart(product);

		const editedInfo = {
			price: totalPrice,
			additional_info: {
				size: sizes.find(size => size.active).id,
				type: types.find(type => type.active).id,
				supplements: getChosenSupplements()
			}
		};

		dispatch(addToCart({ ...productToCart, ...editedInfo }));

		setOpen(false);
		reset();
	};

	/**
	 * Возвращает текст выбранного размера
	 * @returns {*}
	 */
	const getChosenSizeText = () =>
		TEXT_SIZES[sizes.find((item) => item.active)?.id];

	/**
	 * Возвращает текст выбранного типа
	 * @returns {*}
	 */
	const getChosenTypeText = () =>
		TEXT_TYPES[types.find((item) => item.active)?.id];

	return (
		<Modal
			className={styles.product_card_modal}
			isOpen={isOpen}
			setOpen={setOpen}
		>
			<div className={styles.product_card_modal__content}>
				<ProductImage
					isNew={product?.is_new}
					imgUrl={product?.img_url}
				/>

				<div className={styles.product_card_modal__product_info}>
					<ProductInfo
						productInfo={{
							name: product?.name,
							sizeText: getChosenSizeText()[0],
							typeText: getChosenTypeText(),
							weight: getChosenSizeText()[1]
						}}
					/>

					<SizeTypeSelector
						sizes={sizes}
						types={types}
						onSelect={handleTypeOrSizeClick}
					/>

					<Supplements
						supplementsData={supplementsData}
						setSupplements={setSupplements}
					/>

					<Button
						onClickFn={handleAddToCartBtn}
						className={styles.product_card_modal__add_to_cart_btn}
					>
						Добавить в корзину {totalPrice} ₽
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ProductCardModal;
