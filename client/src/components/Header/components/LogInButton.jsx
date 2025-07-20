import styles from "../../../styles/components/Header.module.sass";

const LogInButton = ({ onLogin }) => {
	return (
		<button
			onClick={onLogin}
			className={styles.header__auth}
		>
			Войти
		</button>
	);
};

export default LogInButton;