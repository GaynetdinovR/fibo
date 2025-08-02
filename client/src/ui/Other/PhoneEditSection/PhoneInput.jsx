import styles from "../../../styles/Ui.module.sass";
import Input from "../../Inputs/Input/Input.jsx";
import DashedLink from "../../TextElements/DashedLink.jsx";
import { useState } from "react";
import { formatPhoneToInternational } from "../../../utils/index.js";
import classNames from "classnames";
import InputWithDashedLink from "../../Inputs/InputWithDashedLink.jsx";

const PhoneInput = ({
	phone,
	setPhone,
	isEditing,
	setIsEditing,
	onSubmit,
	className
}) => {
	const [isErrored, setIsErrored] = useState(false);

	/**
	 * Обработчик действия
	 */
	const handleAction = () => {
		if (isEditing) {
			if (phone.length !== 12) {
				return setIsErrored(true);
			}
			setIsErrored(false);
			onSubmit();
		} else {
			setIsEditing(true);
		}
	};

	const placeholder = formatPhoneToInternational(phone) || "+7 999 999 99-99";

	return (
		<InputWithDashedLink
			inputData={{
				placeholder: placeholder,
				setVal: setPhone,
				isDisabled: !isEditing,
				errorInfo: {
					isErrored: isErrored,
					error: "Неправильный формат номера"
				}
			}}
			className={className}
			name={"Номер телефона"}
			onClickFn={handleAction}
		/>
	);
};

export default PhoneInput;
