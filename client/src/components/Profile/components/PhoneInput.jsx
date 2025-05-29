import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useEffect, useState } from "react";
import { formatPhoneToInternational } from "../../../scripts/functions.js";

const PhoneInput = ({ user, phoneNumber, setPhoneNumber, setShowCodeInput }) => {
	const [isPhoneDisabled, setPhoneDisabled] = useState(false);
	const [isPhoneErrored, setPhoneErrored] = useState(false);

	useEffect(() => {
		if (!user.phone) return;
		const input = document.querySelector("." + styles.profile__phone_input);
		const phone = formatPhoneToInternational(user.phone);

		input.placeholder = phone;
		setPhoneNumber(phone);
		setPhoneDisabled(true);
	}, [user]);

	const checkPhoneInput = () => {
		if (phoneNumber.length !== 16) return setPhoneErrored(true);

		setShowCodeInput(true);
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
					setVal={setPhoneNumber}
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
				{isPhoneDisabled ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default PhoneInput;