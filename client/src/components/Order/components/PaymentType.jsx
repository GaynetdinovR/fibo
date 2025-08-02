import styles from "../../../styles/components/Order.module.sass";
import H4 from "../../../ui/Titles/H4.jsx";
import Checkbox from "../../../ui/Inputs/Checkbox.jsx";
import { useState } from "react";
import CardInput from "./CardInput.jsx";

const PaymentType = ({ isCardCheckboxChecked, setCardCheckbox, onChange }) => {
	const [isCashCheckboxChecked, setCashCheckbox] = useState(false);

	const handleCardCheckboxChange = (checked) => {
		setCardCheckbox(checked);
		setCashCheckbox(!checked);
	};

	const handleCashCheckboxChange = (checked) => {
		setCashCheckbox(checked);
		setCardCheckbox(!checked);
	};

	return (
		<div className={styles.order__payment_type}>
			<H4 className={styles.order__payment_type_title}>Способы оплаты</H4>

			<Checkbox
				className={styles.order__payment_type_checkbox}
				checkBoxData={{
					isChecked: isCardCheckboxChecked,
					setChecked: handleCardCheckboxChange
				}}
				icon={"./icons/card.png"}
				text={"Картой на сайте"}
			/>

			<Checkbox
				className={styles.order__payment_type_checkbox}
				checkBoxData={{
					isChecked: isCashCheckboxChecked,
					setChecked: handleCashCheckboxChange
				}}
				icon={"./icons/cash.png"}
				text={"Наличными"}
			/>

			{isCardCheckboxChecked && (
				<>
					<CardInput onChange={onChange} />
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
