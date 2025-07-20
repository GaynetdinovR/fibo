import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { roundToTwo } from "../../utils/functions.js";

import styles from "../../styles/components/ProductCardModal.module.sass";

import Modal from "../../ui/Modal.jsx";
import Button from "../../ui/Button.jsx";
import Supplements from "./components/Supplements.jsx";
import ProductImage from "./components/ProductImage.jsx";
import ProductInfo from "./components/ProductInfo.jsx";
import SizeTypeSelector from "./components/SizeTypeSelector.jsx";

const TEXT_SIZES = {
	small: ["25 см", "320 г"],
	medium: ["32 см", "560 г"],
	large: ["45 см", "880 г"]
};

const TEXT_TYPES = {
	traditional: "традиционное тесто",
	thin: "тонкое тесто"
};

const ProductCardModal = ({ product, supplementsData }) => {
	const { setProductCard, isProductCardOpen } = useContext(ModalContext);
	const [setOpen, isOpen] = [setProductCard, isProductCardOpen];

	// Variables

	const [sizes, setSizes] = useState([
		{ text: "Маленькая", id: "small", active: false },
		{ text: "Средняя", id: "medium", active: true },
		{ text: "Большая", id: "large", active: false }
	]);

	const [types, setTypes] = useState([
		{ text: "Традиционное", id: "traditional", active: true },
		{ text: "Тонкое", id: "thin", active: false }
	]);

	const [supplements, setSupplements] = useState(() =>
		supplementsData.reduce(
			(acc, item) => ({
				...acc,
				[item.supplement_id]: false
			}),
			{}
		)
	);

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
						onClickFn={() => console.log("some shit added to cart")}
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
