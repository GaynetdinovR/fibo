import styles from "../styles/Ui.module.sass";
import classNames from "classnames";
import InputMask from "react-input-mask";
import InputErrorAlert from "./InputErrorAlert.jsx";

const Input = ({ className, placeholder, isDisabled, mask, setVal, errorInfo }) => {
	const classNamesString = errorInfo.isErrored
		? classNames(className, styles.input__errored, styles.input)
		: classNames(className, styles.input);

	return (
		<div className={styles.input__wrap}>
			<InputMask
				onChange={(e) => setVal(e.target.value)}
				mask={mask}
				maskChar={""}
				className={classNamesString}
				placeholder={placeholder}
				disabled={isDisabled}
			/>
			<InputErrorAlert error={errorInfo.error} show={errorInfo.isErrored} />
		</div>
	);
};

export default Input;
