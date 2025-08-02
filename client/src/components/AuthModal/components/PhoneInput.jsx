import styles from "../../../styles/components/AuthModal.module.sass";
import Input from "../../../ui/Inputs/Input/Input.jsx";
import DashedLink from "../../../ui/TextElements/DashedLink.jsx";

const PhoneInput = ({ phoneState, isCodeSent }) => {
	const {
		phone,
		setPhone,
		isPhoneDisabled,
		setPhoneDisabled,
		isPhoneErrored,
		setPhoneErrored
	} = phoneState;

	/**
	 * Проверяет длину введенного номера телефона
	 */
	const checkPhoneInput = () => {
		if (phone.length !== 16) return setPhoneErrored(true);

		setPhoneDisabled(!isPhoneDisabled);
	};

	//Elements

	const PhoneDashedLink = (
		<DashedLink
			onClickFn={checkPhoneInput}
			className={styles.auth_modal__dashed_link}
		>
			{isPhoneDisabled ? "Изменить" : "Сохранить"}
		</DashedLink>
	);

	return (
		<label
			className={styles.auth_modal__input_wrap}
			onClick={() => setPhoneErrored(false)}
		>
			<span className={styles.auth_modal__input_label}>
				Номер телефона
			</span>

			<Input
				mask={"+7 999 999-99-99"}
				placeholder={"+7 999 999-99-99"}
				className={styles.auth_modal__input}
				setVal={setPhone}
				isDisabled={isPhoneDisabled}
				errorInfo={{
					isErrored: isPhoneErrored,
					error: "Неправильный вид номера"
				}}
			/>

			{isCodeSent && PhoneDashedLink}
		</label>
	);
};

export default PhoneInput;
