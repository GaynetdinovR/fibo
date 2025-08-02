import classNames from "classnames";
import styles from "../../styles/Ui.module.sass";

const Button = ({ children, className, isDisabled = false, onClickFn }) => {
	return (
		<button
			onClick={() => onClickFn()}
			className={classNames(className, styles.default_button)}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};

export default Button;
