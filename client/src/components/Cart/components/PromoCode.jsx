import styles from "../../../styles/components/Cart.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import Button from "../../../ui/Button.jsx";
import { useFormState } from "../../../utils/useFormState.js";
import H4 from "../../../ui/H4.jsx";
import { NotificationManager } from "react-notifications";
import { getSumWithDiscount } from "../../../utils/functions.js";


//TODO: make some promocodes and move them to store
const PROMOCODES = {
	"RADMIRGN03032008": {
		discount: 0.2,
		used: false
	}
};

const PromoCode = ({ setTotalSum }) => {
	const [
		promoCode,
		setPromoCode,
		isErrored,
		setErrored,
		isDisabled,
		setDisabled
	] = useFormState();

	const validatePromoCode = () => {
		const isExists = Object.keys(PROMOCODES).includes(promoCode);
		const isNotUsed = !PROMOCODES[promoCode]?.used;

		return isExists && isNotUsed;
	};

	const usePromoCode = () => {
		setTotalSum((prevTotalSum) =>
			getSumWithDiscount(prevTotalSum, PROMOCODES[promoCode]?.discount)
		);

		NotificationManager.success(
			`Промокод ${promoCode} применен`,
			`СКИДКА ${PROMOCODES[promoCode].discount * 100}%`
		);

		PROMOCODES[promoCode].used = true;
	};

	const handleChange = (val) => {
		setErrored(false);
		setPromoCode(val);
	}

	const handleClick = () => {
		if (isDisabled) return setDisabled(false);

		if (!validatePromoCode()) return setErrored(true);

		usePromoCode();

		setErrored(false);
		setDisabled(true);
	};

	const isMobile = window.innerWidth <= 768;

	return (
		<div className={styles.cart__promocode}>
			<H4 className={styles.cart__promocode_title}>Промокод</H4>
			<div className={styles.cart__promocode_wrap}>
				<Input
					className={styles.cart__promocode_input}
					placeholder={!isMobile ? "Введите промокод" : "Промокод"}
					isDisabled={isDisabled}
					setVal={handleChange}
					value={promoCode}
					errorInfo={{
						error: "Этот промокод недействителен",
						isErrored: isErrored
					}}
				/>
				<Button
					onClickFn={handleClick}
					className={styles.cart__promocode_btn}
				>
					{!isDisabled ? "Применить" : "Промокод применён"}
				</Button>
			</div>
		</div>
	);
};

export default PromoCode;