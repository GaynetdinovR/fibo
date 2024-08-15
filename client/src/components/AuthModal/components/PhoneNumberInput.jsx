import styles from "../../../styles/components/AuthModal.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useEffect, useState } from "react";

const PhoneNumberInput = ({
	inputVal,
	setInputVal,
	isPhoneNumberDisabled,
	setPhoneNumberDisabled,
	isPhoneNumberErrored,
	setPhoneNumberErrored,
	isCodeSent
}) => {

	/**
	 * Проверяет заполнен ли инпут
	 */
	const checkPhoneNumberInput = () => {
		if (inputVal.length !== 16) return setPhoneNumberErrored(true);

		setPhoneNumberDisabled(!isPhoneNumberDisabled);
	};

	//Elements

	const phoneNumberDashedLink = (
		<DashedLink
			onClickFn={checkPhoneNumberInput}
			className={styles.auth_modal__dashed_link}
		>
			{isPhoneNumberDisabled ? "Изменить" : "Сохранить"}
		</DashedLink>
	);

	return (
		<label
			className={styles.auth_modal__input_wrap}
			onClick={() => setPhoneNumberErrored(false)}
		>
			<span className={styles.auth_modal__input_label}>
				Номер телефона
			</span>

			<Input
				mask={"+7 999 999-99-99"}
				placeholder={"+7 999 999-99-99"}
				className={styles.auth_modal__input}
				setVal={setInputVal}
				isDisabled={isPhoneNumberDisabled}
				errorInfo={{
					isErrored: isPhoneNumberErrored,
					error: "Неправильный вид номера"
				}}
			/>

			{isCodeSent ? phoneNumberDashedLink : ""}
		</label>
	);
};

export default PhoneNumberInput;
