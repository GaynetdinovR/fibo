import styles from "../../../styles/components/AuthModal.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";

const PhoneNumberInput = ({ setValToAuthState, authModalState }) => {
	const setPhoneNumberInputVal = (val) =>
		setValToAuthState("set_phone_input_val", val);

	const checkPhoneInput = () => {
		if (authModalState.phoneNumberInputVal.length !== 16)
			return setValToAuthState("set_phone_errored", true);

		setValToAuthState("switch_disabled_phone");
	};

	const phoneNumberDashedLink = (
		<DashedLink
			onClickFn={() => checkPhoneInput()}
			className={styles.auth_modal__dashed_link}
		>
			{authModalState.isDisabledPhoneInput ? "Изменить" : "Сохранить"}
		</DashedLink>
	);

	return (
		<label
			className={styles.auth_modal__input_wrap}
			onClick={() => setValToAuthState("set_phone_errored", false)}
		>
			<span className={styles.auth_modal__input_label}>
				Номер телефона
			</span>

			<Input
				mask={"+7 999 999-99-99"}
				placeholder={"+7 999 999-99-99"}
				className={styles.auth_modal__input}
				setVal={setPhoneNumberInputVal}
				isDisabled={authModalState.isDisabledPhoneInput}
				errorInfo={{
					isErrored: authModalState.isPhoneErrored,
					error: "Неправильный вид номера"
				}}
			/>
			{authModalState.isCodeSent ? phoneNumberDashedLink : ""}
		</label>
	);
};

export default PhoneNumberInput;
