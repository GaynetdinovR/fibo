import Input from "../../../ui/Inputs/Input/Input.jsx";
import styles from "../../../styles/components/Order.module.sass";
import { usePaymentForm } from "../../../hooks/usePaymentForm.js";
import { isValidCardDate, isValidCardNumber, isValidCvc } from "../../../utils/helpers.js";

const CardInput = ({ onChange }) => {
	const [cardData, handleFieldChange] = usePaymentForm({
		cardNumber: "",
		cardDate: "",
		cvc: ""
	});

	const handleChange = (field, value) => {
		handleFieldChange(field, value);

		onChange({
			...cardData,
			[field]: value
		});
	};

	const handleCardChange = (val) => {
		handleChange("cardNumber", val);
	};

	const handleCardDateChange = (val) => {
		handleChange("cardDate", val);
	};

	const handleCvcChange = (val) => {
		handleChange("cvc", val);
	};

	return (
		<div className={styles.order__card_wrap}>
			<Input
				className={styles.order__card_input}
				placeholder="Номер карты"
				setVal={handleCardChange}
				errorInfo={{
					error: "Невалидный номер карты",
					isErrored:
						cardData.cardNumber.length === 19 &&
						!isValidCardNumber(cardData.cardNumber)
				}}
				mask="9999 9999 9999 9999"
			/>

			<Input
				className={styles.order__date_input}
				placeholder="ММ/ГГ"
				setVal={handleCardDateChange}
				errorInfo={{
					error: "Невалидный срок действия",
					isErrored:
						cardData.cardDate.length === 5 &&
						!isValidCardDate(cardData.cardDate)
				}}
				mask="99/99"
			/>

			<Input
				className={styles.order__cvc_input}
				placeholder="CVC"
				setVal={handleCvcChange}
				errorInfo={{
					error: "Невалидный CVC",
					isErrored:
						cardData.cvc.length === 3 && !isValidCvc(cardData.cvc)
				}}
				mask="999"
			/>
		</div>
	);
};

export default CardInput;
