import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const H6 = ({children, className}) => {
	return (
        <h6 className={classNames(className, styles.h6)}>
            {children}
        </h6>
	);
};

export default H6;