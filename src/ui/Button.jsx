import classNames from "classnames";
import styles from '../styles/Ui.module.sass'
const Button = ({children, className}) => {
	return(
		<button className={classNames(className, styles.default_button)}>
			{ children }
		</button>
	)
}

export default Button;