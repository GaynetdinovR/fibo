import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from "react-notifications";
import { formatPhoneFromInternational } from "./functions.js";
import { authorization } from "./api.js";
import { generateCode } from "./functions.js";
import { login } from "../store/userSlice/userSlice.js";

const PHONE_LENGTH = 16;

export const useAuthForm = (closeModal) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [formState, setFormState] = useState({
		phone: "",
		codeInput: "",
		code: "0000",
		isCodeSent: false,
		isPhoneDisabled: false,
		errors: {
			phone: false,
			code: false
		}
	});

	const updateState = (newState) => {
		setFormState(prev => ({ ...prev, ...newState }));
	};

	const validatePhone = () => {
		const isValid = formState.phone.length === PHONE_LENGTH;

		updateState({ errors: { ...formState.errors, phone: !isValid } });

		return isValid;
	};

	const sendCode = () => {
		if (!validatePhone()) return;

		const newCode = generateCode();

		updateState({
			isCodeSent: true,
			isPhoneDisabled: true,
			code: newCode
		});

		NotificationManager.info(`Код подтверждения: ${newCode}`);
	};

	const handleLogin = async () => {

		if (formState.codeInput !== formState.code) {
			return updateState({ errors: { ...formState.errors, code: true } });
		}

		try {
			const formattedPhone = formatPhoneFromInternational(formState.phone);
			await authorization(formattedPhone);

			dispatch(login(formattedPhone));
			NotificationManager.success("Вы успешно зашли в аккаунт");

			navigate("/profile");
			closeModal();
			resetForm();
		} catch (error) {
			NotificationManager.error("Ошибка авторизации");
			console.error("Login failed:", error);
		}
	};

	const resetForm = () => {
		updateState({
			phone: "",
			codeInput: "",
			code: "0000",
			isCodeSent: false,
			isPhoneDisabled: false,
			errors: { phone: false, code: false }
		});
	};

	return {
		formState,
		handlers: {
			setPhone: (phone) => updateState({ phone }),
			setCodeInput: (codeInput) => updateState({ codeInput }),
			setPhoneErrored: (value) => updateState({ errors: { ...formState.errors, phone: value } }),
			setPhoneDisabled: (isPhoneDisabled) => updateState({ isPhoneDisabled }),
			setCodeErrored: (value) => updateState({ errors: { ...formState.errors, code: value } }),
			setCode: (code) => updateState({ code }),
			sendCode,
			handleLogin,
			resetForm
		},
		validatePhone
	};
};