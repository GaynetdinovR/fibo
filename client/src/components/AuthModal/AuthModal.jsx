import styles from "../../styles/components/AuthModal.module.sass";

import Modal from "../../ui/Modal.jsx";
import H3 from "../../ui/H3.jsx";
import CodeInput from "./components/CodeInput.jsx";
import BottomSide from "./components/BottomSide.jsx";
import LogInButton from "./components/LogInButton.jsx";
import PhoneInput from "./components/PhoneInput.jsx";

import { useContext } from "react";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { useAuthForm } from "../../utils/useAuthForm.js";

const AuthModal = () => {
	const { setAuth, isAuthOpen } = useContext(ModalContext);
	const [setOpen, isOpen] = [setAuth, isAuthOpen];

	const { formState, handlers } = useAuthForm(() => setOpen(false));

	return (
		<Modal className={styles.auth_modal} setOpen={setOpen} isOpen={isOpen}>
			<div className={styles.auth_modal__content}>
				<H3 className={styles.auth_modal__title}>Вход на сайт</H3>

				<PhoneInput
					phoneState={{
						phone: formState.phone,
						setPhone: handlers.setPhone,
						isPhoneDisabled: formState.isPhoneDisabled,
						setPhoneDisabled: handlers.setPhoneDisabled,
						isPhoneErrored: formState.errors.phone,
						setPhoneErrored: handlers.setPhoneErrored
					}}
					isCodeSent={formState.isCodeSent}
				/>

				{formState.isCodeSent && (
					<CodeInput
						codeState={{
							setCodeInput: handlers.setCodeInput,
							setCode: handlers.setCode,
							isCodeErrored: formState.errors.code,
							setCodeErrored: handlers.setCodeErrored
						}}
					/>
				)}

				{!formState.isCodeSent && (
					<BottomSide sendCode={handlers.sendCode} />
				)}

				{formState.isCodeSent && <LogInButton handler={handlers.handleLogin} />}
			</div>
		</Modal>
	);
};

export default AuthModal;
