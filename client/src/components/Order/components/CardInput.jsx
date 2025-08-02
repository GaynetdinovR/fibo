import Input from "../../../ui/Inputs/Input/Input.jsx";
import styles from "../../../styles/components/Order.module.sass";
import { useFormState } from "../../../hooks/useFormState.js";

const CardInput = ({ onChange = () => {} }) => {
	const [
		cardNumber,
		setCard,
		isCardDisabled,
		setCardDisabled,
		isCardErrored,
		setCardErrored
	] = useFormState();

	const [
		cardDate,
		setCardDate,
		isCardDateDisabled,
		setCardDateDisabled,
		isCardDateErrored,
		setCardDateErrored
	] = useFormState();

	const [
		cvc,
		setCvc,
		isCvcDisabled,
		setCvcDisabled,
		isCvcErrored,
		setCvcErrored
	] = useFormState();

	const isValidCardDate = (date) => {
		const [month, year] = date.split("/");
		const numericMonth = parseInt(month);

		return !isNaN(numericMonth) && numericMonth >= 1 && numericMonth <= 12;
	};

	const isValidCardNumber = (card) => {
		return (card.length === 19);
	};

	const handleCardChange = (val) => {
		setCard(val);
		onChange({ cardNumber: val, cardDate, cvc });
		setCardErrored(false);

		if (val.length === 19) {
			setCardErrored(!isValidCardNumber(val));
		}
	};

	const handleCardDateChange = (val) => {
		setCardDate(val);
		onChange({ cardNumber, cardDate: val, cvc });
		setCardDateErrored(false);

		if (val.length === 5) {
			setCardDateErrored(!isValidCardDate(val));
		}
	};

	const handleCvcChange = (val) => {
		setCvc(val);
		onChange({ cardNumber, cardDate, cvc: val });
		setCvcErrored(false);
	};

	return (
		<div className={styles.order__card_wrap}>
			<Input
				className={styles.order__card_input}
				placeholder="Номер карты"
				setVal={handleCardChange}
				isDisabled={isCardDisabled}
				errorInfo={{
					error: "Невалидный номер карты",
					isErrored: isCardErrored
				}}
				mask={"9999 9999 9999 9999"}
			/>

			<Input
				className={styles.order__date_input}
				placeholder="ММ/ГГ"
				setVal={handleCardDateChange}
				isDisabled={isCardDateDisabled}
				errorInfo={{
					error: "Невалидный срок действия",
					isErrored: isCardDateErrored
				}}
				mask={"99/99"}
			/>

			<Input
				className={styles.order__cvc_input}
				placeholder="CVC"
				setVal={handleCvcChange}
				isDisabled={isCvcDisabled}
				errorInfo={{
					error: "Невалидный CVC",
					isErrored: isCvcErrored
				}}
				mask={"999"}
			/>
		</div>
	);
};

export default CardInput;