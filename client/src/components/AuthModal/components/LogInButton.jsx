import Button from "../../../ui/Buttons/Button.jsx";
import styles from "../../../styles/components/AuthModal.module.sass";

const LogInButton = ({ handler }) => {
	return (
		<Button
			onClickFn={handler}
			className={styles.auth_modal__log_in_btn}
		>
			Войти
		</Button>
	);
};

export default LogInButton;