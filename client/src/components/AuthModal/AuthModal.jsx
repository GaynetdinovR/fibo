import styles from "../../styles/components/AuthModal.module.sass";

import Modal from "../../ui/Modal.jsx";
import H3 from "../../ui/H3.jsx";
import Button from "../../ui/Button.jsx";

import PhoneNumberInput from "./components/PhoneNumberInput.jsx";
import CodeInput from "./components/CodeInput.jsx";
import BottomSide from "./components/BottomSide.jsx";

import { NotificationManager } from "react-notifications";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice/userSlice.js";

import { formatPhone } from "../../scripts/functions.js";
import { authorization } from "../../scripts/api.js";

const reducer = (state, action) => {
	switch (action.type) {
		case "switch_disabled_phone":
			return { ...state, isDisabledPhoneInput: !state.isDisabledPhoneInput };
		case "set_code_sent":
			return { ...state, isCodeSent: action.val };
		case "set_disabled_phone":
			return { ...state, isDisabledPhoneInput: action.val };
		case "set_code_errored":
			return { ...state, isCodeErrored: action.val };
		case "set_phone_errored":
			return { ...state, isPhoneErrored: action.val };
		case "set_code":
			return { ...state, code: action.val };
		case "set_code_input_val":
			return { ...state, codeInputVal: action.val };
		case "set_phone_input_val":
			return { ...state, phoneNumberInputVal: action.val };
		default:
			throw new Error("Unknown action: " + action.type);
	}
};

const AuthModal = ({ setOpen, isOpen }) => {
	const initState = {
		phoneNumberInputVal: "",
		codeInputVal: "",
		code: "0000",
		isCodeSent: false,
		isDisabledPhoneInput: false,
		isPhoneErrored: false,
		isCodeErrored: false
	};

	const [authModalState, localDispatch] = useReducer(reducer, initState);

	const setValToAuthState = (type, val) => {
		localDispatch({ type: type, val: val });
	};

	const dispatch = useDispatch();

	/**
	 * Действия после нажатия кнопки "Войти"
	 */
	const logInBtnClicked = async () => {
		if (authModalState.codeInputVal !== authModalState.code)
			return setValToAuthState("set_code_errored", true);

		const phoneNumber = formatPhone(authModalState.phoneNumberInputVal);

		dispatch(login(phoneNumber));
		NotificationManager.success("Вы успешно зашли в аккаунт");
		setOpen(false);

		await authorization(phoneNumber);
	};

	//Elements

	const logInBtn = (
		<Button
			onClickFn={logInBtnClicked}
			className={styles.auth_modal__log_in_btn}
		>
			Войти
		</Button>
	);

	return (
		<Modal className={styles.auth_modal} setOpen={setOpen} isOpen={isOpen}>
			<div className={styles.auth_modal__content}>
				<H3 className={styles.auth_modal__title}>Вход на сайт</H3>

				<PhoneNumberInput
					setValToAuthState={setValToAuthState}
					authModalState={authModalState}
				/>

				{authModalState.isCodeSent ? (
					<CodeInput
						authModalState={authModalState}
						setValToAuthState={setValToAuthState}
					/>
				) : null}

				{!authModalState.isCodeSent ? (
					<BottomSide
						authModalState={authModalState}
						setValToAuthState={setValToAuthState}
					/>
				) : null}

				{authModalState.isCodeSent ? logInBtn : null}
			</div>
		</Modal>
	);
};

export default AuthModal;
