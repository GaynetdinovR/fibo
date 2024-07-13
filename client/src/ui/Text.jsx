import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const Text = ({ children, className }) => {
	return (
		<p className={classNames(className, styles.text)}>
			{children}
		</p>
	);
};

export default Text;