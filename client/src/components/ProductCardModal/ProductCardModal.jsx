import {
	memo,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState
} from "react";
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

import {
	TEXT_SIZES,
	TEXT_TYPES
} from "../../constants/product_localization.js";

const INIT_SIZES = [
	{ id: "small", active: false },
	{ id: "medium", active: true },
	{ id: "large", active: false }
];

const INIT_TYPES = [
	{ id: "traditional", active: true },
	{ id: "thin", active: false }
];

const createInitialSupplements = (supplementsData) =>
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
	const [supplements, setSupplements] = useState(
		createInitialSupplements(supplementsData)
	);
	const [totalPrice, setTotalPrice] = useState(0);

	const activeSize = useMemo(
		() => sizes.find((size) => size.active),
		[sizes]
	);
	const activeType = useMemo(
		() => types.find((type) => type.active),
		[types]
	);

	const chosenSupplements = useMemo(
		() =>
			Object.entries(supplements)
				.filter(([_, status]) => status)
				.map(([key]) => key),
		[supplements]
	);
	const chosenSizeText = useMemo(
		() => TEXT_SIZES[activeSize?.id],
		[activeSize]
	);
	const chosenTypeText = useMemo(
		() => TEXT_TYPES[activeType?.id],
		[activeType]
	);

	/**
	 * Расчет итоговой цены, меняется при выборе дополнений к пицце или изменении размера
	 */
	useEffect(() => {
		if (!product) return;

		let basePrice = product.price || 0;

		if (activeSize?.id === "small") basePrice -= 200;
		if (activeSize?.id === "large") basePrice += 200;

		const supplementsPrice = supplementsData.reduce((sum, item) => {
			return sum + (supplements[item.supplement_id] ? item.price : 0);
		}, 0);

		setTotalPrice(roundToTwo(basePrice + supplementsPrice));
	}, [activeSize, supplements, product, supplementsData]);

	/**
	 * Обработчик изменения размера/типа пиццы
	 * @param clickedId size/type id
	 */
	const handleTypeOrSizeClick = useCallback(
		(clickedId) => {
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
		},
		[sizes, types]
	);

	/**
	 * Сбрасывает введенные данные
	 */
	const resetState = useCallback(() => {
		setSizes(INIT_SIZES);
		setTypes(INIT_TYPES);
		setSupplements(createInitialSupplements(supplementsData));
	}, [supplementsData]);

	/**
	 * Обработчик добавления в корзину
	 */
	const handleAddToCart = useCallback(() => {
		if (!product) return;

		const productToCart = formatDefaultProductToCart(product);
		const editedInfo = {
			price: totalPrice,
			additional_info: {
				size: activeSize.id,
				type: activeType.id,
				supplements: supplementsData
					.filter(item => chosenSupplements.includes(item.supplement_id))
					.map(item => item.id)
			}
		};

		dispatch(addToCart({ ...productToCart, ...editedInfo }));
		setProductCard(false);
		resetState();
	}, [
		product,
		totalPrice,
		activeSize,
		activeType,
		chosenSupplements,
		dispatch,
		setProductCard,
		resetState
	]);

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
							sizeText: chosenSizeText[0],
							typeText: chosenTypeText,
							weight: chosenSizeText[1]
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
						onClickFn={handleAddToCart}
						className={styles.product_card_modal__add_to_cart_btn}
					>
						Добавить в корзину {totalPrice} ₽
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default memo(ProductCardModal);
