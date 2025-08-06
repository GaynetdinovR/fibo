import styles from "../../../styles/components/Order.module.sass";
import H4 from "../../../ui/Titles/H4.jsx";
import Checkbox from "../../../ui/Inputs/Checkbox.jsx";
import CardInput from "./CardInput.jsx";
import { useToggle } from "../../../hooks/useToggle.js";

const PaymentType = ({ setPaymentMethod, onCartDataChange }) => {
	const [isCardChecked, cardActions] = useToggle(true);
	const [isCashChecked, cashActions] = useToggle(false);

	const handleCardCheck = (checked) => {
		cardActions.setOn();
		cashActions.setOff();
		setPaymentMethod(checked ? "card" : "cash");
	};

	const handleCashCheck = (checked) => {
		cashActions.setOn();
		cardActions.setOff();
		setPaymentMethod(checked ? "cash" : "card");
	};

	return (
		<div className={styles.order__payment_type}>
			<H4 className={styles.order__payment_type_title}>Способы оплаты</H4>

			<Checkbox
				className={styles.order__payment_type_checkbox}
				checkBoxData={{
					isChecked: isCardChecked,
					setChecked: handleCardCheck
				}}
				icon={"./icons/card.webp"}
				text={"Картой на сайте"}
			/>

			<Checkbox
				className={styles.order__payment_type_checkbox}
				checkBoxData={{
					isChecked: isCashChecked,
					setChecked: handleCashCheck
				}}
				icon={"./icons/cash.webp"}
				text={"Наличными"}
			/>

			{isCardChecked && (
				<>
					<CardInput onChange={onCartDataChange} />
					<span className={styles.order__payment_type_text}>
						Безопасность платежей гарантирована: • Мы не сохраняем
						данные вашей карты. • Все операции обрабатывает СберБанк
						— платёжная система, соответствующая международному
						стандарту PCI DSS.
					</span>
				</>
			)}
		</div>
	);
};

export default PaymentType;
