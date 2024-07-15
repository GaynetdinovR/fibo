import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const H2 = ({ children, className }) => {
	return (
		<h2 className={classNames(className, styles.h2)}>
			{children}
		</h2>
	);
};

export default H2;