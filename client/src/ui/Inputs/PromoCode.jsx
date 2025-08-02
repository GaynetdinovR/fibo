import styles from "../../styles/Ui.module.sass";
import Input from "./Input/Input.jsx";
import Button from "../Buttons/Button.jsx";
import { useFormState } from "../../hooks/useFormState.js";
import H4 from "../Titles/H4.jsx";
import { NotificationManager } from "react-notifications";
import { getSumWithDiscount } from "../../utils/index.js";
import classNames from "classnames";


//TODO: make some promocodes and move them to store
const PROMOCODES = {
	"RADMIRGN03032008": {
		discount: 0.2,
		used: false
	}
};

const PromoCode = ({ setTotalSum = () => {}, className }) => {
	const [
		promoCode,
		setPromoCode,
		isErrored,
		setErrored,
		isDisabled,
		setDisabled
	] = useFormState();

	/**
	 * Валидация промокода
	 * @returns {*}
	 */
	const validatePromoCode = () => {
		const isExists = Object.keys(PROMOCODES).includes(promoCode);
		const isNotUsed = !PROMOCODES[promoCode]?.used;

		return isExists && isNotUsed;
	};

	/**
	 * Использование промокода
	 * @returns {*}
	 */
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

	/**
	 * Обработчик изменения
	 * @returns {*}
	 */
	const handleChange = (val) => {
		setErrored(false);
		setPromoCode(val);
	};

	/**
	 * Обработчик клика
	 * @returns {*}
	 */
	const handleClick = () => {
		if (isDisabled) return setDisabled(false);

		if (!validatePromoCode()) return setErrored(true);

		usePromoCode();

		setErrored(false);
		setDisabled(true);
	};

	const isMobile = window.innerWidth <= 768;

	return (
		<div className={classNames(styles.promocode, className)}>
			<H4 className={styles.promocode__title}>Промокод</H4>
			<div className={styles.promocode__wrap}>
				<Input
					className={styles.promocode__input}
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
					className={styles.promocode__btn}
				>
					{!isDisabled ? "Применить" : "Промокод применён"}
				</Button>
			</div>
		</div>
	);
};

export default PromoCode;