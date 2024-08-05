import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const InputErrorAlert = ({ error, show }) => {
	const classNamesString = show ? styles.input_error_alert : 'none'

	return (
		<div className={classNamesString}>
			<div className={styles.input_error_alert__img}>
				<img src="./icons/warn.png" alt="warn" />
			</div>
			<span className={styles.input_error_alert__text}>{error}</span>
		</div>
	);
};

export default InputErrorAlert;