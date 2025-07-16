import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useFormState } from "../../../scripts/hooks.js";
import { useEffect } from "react";
import { formatPhoneToInternational } from "../../../scripts/functions.js";

const PhoneInput = ({userData, codeInputData}) => {
	const [
		phone,
		setPhone,
		isPhoneDisabled,
		setPhoneDisabled,
		isPhoneErrored,
		setPhoneErrored
	] = useFormState();

	useEffect(() => {
		if (!userData.phone) return;
		const input = document.querySelector("." + styles.profile__phone_input);
		const phone = formatPhoneToInternational(userData.phone);

		input.placeholder = phone;
		setPhone(phone);
		setPhoneDisabled(true);
	}, [userData]);

	const checkPhoneInput = () => {
		if (phone.length !== 16) return setPhoneErrored(true);
		if (codeInputData.isShowCodeInput) return;

		codeInputData.setShowCodeInput(true);
		setPhoneErrored(false);
		setPhoneDisabled(!isPhoneDisabled);
	};

	return (
		<div className={styles.profile__input_wrap}>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>
					Номер телефона
				</span>

				<Input
					className={styles.profile__phone_input}
					placeholder={"+7 999 999 99-99"}
					mask={"+7 999 999 99-99"}
					setVal={setPhone}
					isDisabled={isPhoneDisabled}
					errorInfo={{
						isErrored: isPhoneErrored,
						error: "Неправильный вид номера"
					}}
				/>
			</label>

			<DashedLink
				onClickFn={() => checkPhoneInput()}
				className={styles.profile__input_link}
			>
				{isPhoneDisabled && !codeInputData.isShowCodeInput ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default PhoneInput;