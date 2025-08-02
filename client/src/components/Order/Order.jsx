import styles from "../../styles/components/Order.module.sass";
import H3 from "../../ui/Titles/H3.jsx";
import UserData from "./components/UserData.jsx";
import PromoCode from "../../ui/Inputs/PromoCode.jsx";
import PaymentType from "./components/PaymentType.jsx";
import ControlBtns from "../../ui/Buttons/ControlBtns.jsx";
import OrderComposition from "./components/OrderComposition.jsx";
import Checkbox from "../../ui/Inputs/Checkbox.jsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartSum, roundToTwo, scroll } from "../../utils/index.js";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { clearCart } from "../../store/cartSlice/cartSlice.js";

const Order = () => {
	const cart = useSelector(state => state.cart);
	const user = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isBonusesCheckboxChecked, setBonusesCheckbox] = useState(false);
	const [isPickup, setIsPickup] = useState(false);
	const [isCardCheckboxChecked, setCardCheckbox] = useState(true);
	const [cardData, setCardData] = useState({});

	const validateForm = () => {
		const newErrors = {
			phone: !user.phone,
			name: !user.name,
			address: isPickup ? false : !user.address,
			cardNumber: isCardCheckboxChecked && !cardData.cardNumber,
			cardDate: isCardCheckboxChecked && !cardData.cardDate,
			cvc: isCardCheckboxChecked && !cardData.cvc
		};

		return newErrors;
	};

	const handleContinueBtnClick = () => {
		const newErrors = validateForm();

		if (Object.values(newErrors).some(error => error)) {
			return NotificationManager.error("Заполните все формы!");
		}

		proceedToCheckout();
	};

	const proceedToCheckout = () => {
		dispatch(clearCart());

		navigate("/", { state: { showOrderSuccess: true } });

		scroll(0, 0);
	};

	const btnsData = {
		continueBtn: {
			text: `Оформить ${roundToTwo(getCartSum(cart))}₽`,
			onClickFn: handleContinueBtnClick
		},
		backBtn: {
			text: "Назад в корзину",
			to: "/cart"
		}
	};

	return (
		<section className={styles.order}>
			<div className={styles.order__left_side}>
				<H3 className={styles.order__title}>Заказ</H3>
				<UserData
					user={user}
					isPickup={isPickup}
					setIsPickup={setIsPickup}
				/>
				<PromoCode className={styles.order__promocode} />
				<PaymentType
					onChange={setCardData}
					isCardCheckboxChecked={isCardCheckboxChecked}
					setCardCheckbox={setCardCheckbox}
				/>
				<Checkbox
					className={styles.order__checkbox}
					text={"Сообщать о бонусах, акциях и новых продуктах"}
					checkBoxData={{
						isChecked: isBonusesCheckboxChecked,
						setChecked: setBonusesCheckbox
					}}
				/>
				<ControlBtns
					className={styles.order__bottom_side}
					btnsData={btnsData}
				/>
			</div>
			<OrderComposition cart={cart} />
		</section>
	);
};

export default Order;
