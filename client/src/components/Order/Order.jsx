import styles from "../../styles/components/Order.module.sass";
import H3 from "../../ui/Titles/H3.jsx";
import UserData from "./components/UserData.jsx";
import PromoCode from "../../ui/Inputs/PromoCode.jsx";
import PaymentType from "./components/PaymentType.jsx";
import ControlBtns from "../../ui/Buttons/ControlBtns.jsx";
import OrderComposition from "./components/OrderComposition.jsx";
import Checkbox from "../../ui/Inputs/Checkbox.jsx";
import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartSum, roundToTwo } from "../../utils/index.js";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { clearCart } from "../../store/cartSlice/cartSlice.js";
import { useToggle } from "../../hooks/useToggle.js";
import { createOrder } from "../../utils/api.js";
import {
	isValidCardDate,
	isValidCardNumber,
	isValidCvc
} from "../../utils/helpers.js";

const Order = () => {
	const cart = useSelector((state) => state.cart);
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isBonusesChecked, bonusesActions] = useToggle(false);
	const [isPickup, pickupActions] = useToggle(false);
	const [paymentMethod, setPaymentMethod] = useState("card");
	const [cardData, setCardData] = useState({
		cardNumber: "",
		cardDate: "",
		cvc: ""
	});

	const validateForm = () => {
		const errors = {
			phone: !user.phone,
			name: !user.name,
			address: !isPickup && !user.address,
			...(paymentMethod === "card" && {
				cardNumber: !isValidCardNumber(cardData.cardNumber),
				cardDate: !isValidCardDate(cardData.cardDate),
				cvc: !isValidCvc(cardData.cvc)
			})
		};

		return errors;
	};

	const getOrderData = () => {
		return {
			items: cart.map((product) => ({
				productId: product.id,
				count: product.count,
				price: product.price,
				size: product.additional_info.size || null,
				type: product.additional_info.type || null,
				supplements: product.additional_info.supplements || []
			})),
			paymentMethod: paymentMethod,
			deliveryAddress: user.address,
			isPickup: isPickup
		};
	};

	const handleCheckout = async () => {
		try {
			const errors = validateForm();

			if (Object.values(errors).some(Boolean)) {
				throw new Error("Заполните обязательные поля!");
			}

			const { success, orderId } = await createOrder(
				user.id,
				getOrderData()
			);

			if (!success) throw new Error("Ошибка при оформлении заказа");

			dispatch(clearCart());
			navigate("/", { state: { showOrderSuccess: true, orderId } });
		} catch (error) {
			console.error("Checkout failed:", error);
			NotificationManager.error(
				error.message || "Произошла ошибка при оформлении заказа"
			);
		}
	};

	const btnsData = {
		continueBtn: {
			text: `Оформить ${roundToTwo(getCartSum(cart))}₽`,
			onClickFn: handleCheckout
		},
		backBtn: {
			text: "Назад в корзину",
			to: "/cart"
		}
	};

	const isLargeDesktop = window.innerWidth >= 1440;


	return (
		<section className={styles.order}>
			<div className={styles.order__left_side}>
				<H3 className={styles.order__title}>Заказ</H3>
				<UserData
					user={user}
					isPickup={isPickup}
					setIsPickup={pickupActions.toggle}
				/>

				<PromoCode
					setTotalSum={() => {}}
					className={styles.order__promocode}
				/>

				<PaymentType
					setPaymentMethod={setPaymentMethod}
					onCartDataChange={setCardData}
				/>

				{!isLargeDesktop && <OrderComposition cart={cart} />}

				<Checkbox
					className={styles.order__checkbox}
					text="Сообщать о бонусах, акциях и новых продуктах"
					checkBoxData={{
						isChecked: isBonusesChecked,
						setChecked: bonusesActions.toggle
					}}
				/>
				<ControlBtns
					className={styles.order__bottom_side}
					btnsData={btnsData}
				/>
			</div>
			{isLargeDesktop && <OrderComposition cart={cart} />}
		</section>
	);
};

export default memo(Order);
