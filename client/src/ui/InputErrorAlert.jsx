import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const InputErrorAlert = ({ error, show }) => {
	return show ? (
		<div className={styles.input_error_alert}>
			<div className={styles.input_error_alert__img}>
				<img src="./icons/warn.png" alt="warn" />
			</div>
			<span className={styles.input_error_alert__text}>{error}</span>
		</div>
	) : null;
};

export default InputErrorAlert;
