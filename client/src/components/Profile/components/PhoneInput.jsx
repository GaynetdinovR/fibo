import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useEffect, useState } from "react";
import { formatPhoneToInternational } from "../../../utils/functions.js";

const PhoneInput = ({ phone, setPhone, isEditing, setIsEditing, onSubmit }) => {
	const [isErrored, setIsErrored] = useState(false);

	const handleAction = () => {
		if (isEditing) {
			if (phone.length !== 16) {
				return setIsErrored(true);
			}
			setIsErrored(false);
			onSubmit();
		} else {
			setIsEditing(true);
		}
	};


	return (
		<div className={styles.profile__input_wrap}>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>
					Номер телефона
				</span>
				<Input
					className={styles.profile__phone_input}
					placeholder={
						formatPhoneToInternational(phone) || "+7 999 999 99-99"
					}
					mask={"+7 999 999 99-99"}
					setVal={setPhone}
					isDisabled={!isEditing}
					errorInfo={{
						isErrored: isErrored,
						error: "Неправильный формат номера"
					}}
				/>
			</label>

			<DashedLink
				onClickFn={handleAction}
				className={styles.profile__input_link}
			>
				{isEditing ? "Подтвердить" : "Изменить"}
			</DashedLink>
		</div>
	);
};

export default PhoneInput;
