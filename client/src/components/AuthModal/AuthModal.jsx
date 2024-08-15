import styles from "../../styles/components/AuthModal.module.sass";

import Modal from "../../ui/Modal.jsx";
import H3 from "../../ui/H3.jsx";
import Button from "../../ui/Button.jsx";

import PhoneNumberInput from "./components/PhoneNumberInput.jsx";
import CodeInput from "./components/CodeInput.jsx";
import BottomSide from "./components/BottomSide.jsx";

import { NotificationManager } from "react-notifications";
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice/userSlice.js";

import { formatPhone } from "../../scripts/functions.js";
import { authorization } from "../../scripts/api.js";
import { useNavigate } from "react-router-dom";

const AuthModal = ({ setOpen, isOpen }) => {
	//Code input
	const [codeInputVal, setCodeInputVal] = useState("");
	const [isCodeErrored, setCodeErrored] = useState(false);

	//Code
	const [code, setCode] = useState("0000");
	const [isCodeSent, setCodeSent] = useState(false);

	//Phone input
	const [phoneNumberInputVal, setPhoneNumberInputVal] = useState("");
	const [isPhoneNumberDisabled, setPhoneNumberDisabled] = useState(false);
	const [isPhoneNumberErrored, setPhoneNumberErrored] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	/**
	 * Действия после нажатия кнопки "Выслать код"
	 */
	const getCodeBtnClicked = () => {
		if (phoneNumberInputVal.length !== 16) return setPhoneNumberErrored(true);

		setCodeSent(true);
		setPhoneNumberDisabled(true);
	};

	/**
	 * Действия после нажатия кнопки "Войти"
	 */
	const logInBtnClicked = async () => {
		if (codeInputVal !== code) return setCodeErrored(true);

		const phoneNumber = formatPhone(phoneNumberInputVal);

		dispatch(login(phoneNumber));

		NotificationManager.success("Вы успешно зашли в аккаунт");

		navigate("/profile");

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
					inputVal={phoneNumberInputVal}
					setInputVal={setPhoneNumberInputVal}
					isPhoneNumberDisabled={isPhoneNumberDisabled}
					setPhoneNumberDisabled={setPhoneNumberDisabled}
					isPhoneNumberErrored={isPhoneNumberErrored}
					setPhoneNumberErrored={setPhoneNumberErrored}
					isCodeSent={isCodeSent}
				/>

				{isCodeSent ? (
					<CodeInput
						setInputVal={setCodeInputVal}
						setCode={setCode}
						isCodeErrored={isCodeErrored}
						setCodeErrored={setCodeErrored}
					/>
				) : null}

				{!isCodeSent ? (
					<BottomSide getCodeBtnClicked={getCodeBtnClicked} />
				) : null}

				{isCodeSent ? logInBtn : null}
			</div>
		</Modal>
	);
};

export default AuthModal;
