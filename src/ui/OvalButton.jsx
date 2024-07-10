import styles from '../styles/Ui.module.sass';
import classNames from "classnames";

const OvalButton = ({children, className}) => {
	return (
		<button className={classNames(className, styles.oval_btn)}>
			{children}
		</button>
	)
}

export default OvalButton;