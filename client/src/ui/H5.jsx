import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const H5 = ({ children, className }) => {
	return (
		<h5 className={classNames(className, styles.h5)}>
			{children}
		</h5>
	);
};

export default H5;

