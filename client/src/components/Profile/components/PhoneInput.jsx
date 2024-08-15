import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useState } from "react";

const PhoneInput = ({ phoneNumber, setPhoneNumber }) => {
	const [isPhoneDisabled, setPhoneDisabled] = useState(false);
	const [isPhoneErrored, setPhoneErrored] = useState(false);

	const checkPhoneInput = () => {
		if (phoneNumber.length !== 16) return setPhoneErrored(true);

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
					className={styles.profile__input}
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