import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const H3 = ({ children, className }) => {
	return (
		<h4 className={classNames(className, styles.h3)}>
			{children}
		</h4>
	);
};

export default H3;