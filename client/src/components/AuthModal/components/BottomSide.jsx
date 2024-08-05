import styles from "../../../styles/components/AuthModal.module.sass";
import Button from "../../../ui/Button.jsx";
import Text from "../../../ui/Text.jsx";

const BottomSide = ({ setValToAuthState, authModalState }) => {
	/**
	 * Действия после нажатия кнопки "Выслать код"
	 */
	const getCodeBtnClicked = () => {
		if (authModalState.phoneNumberInputVal.length !== 16)
			return setValToAuthState("set_phone_errored", true);

		setValToAuthState("set_code_sent", true);
		setValToAuthState("set_disabled_phone", true);
	};

	return (
		<div className={styles.auth_modal__bottom_side}>
			<Button
				onClickFn={getCodeBtnClicked}
				className={styles.auth_modal__get_code_btn}
			>
				Выслать код
			</Button>

			<Text className={styles.auth_modal__terms_of_use}>
				<span>Продолжая, вы соглашаетесь </span>
				<a
					target="blank"
					href="https://en.wikipedia.org/wiki/Terms_of_service"
				>
					со сбором и обработкой персональных данных и
					пользовательским соглашением
				</a>
			</Text>
		</div>
	);
};

export default BottomSide;