import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const H4 = ({ children, className }) => {
	return (
		<h4 className={classNames(className, styles.h4)}>
			{children}
		</h4>
	);
};

export default H4;