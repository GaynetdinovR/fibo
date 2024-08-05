import classNames from "classnames";
import styles from '../styles/Ui.module.sass'
const Button = ({children, className, onClickFn}) => {
	return(
		<button onClick={() => onClickFn()} className={classNames(className, styles.default_button)}>
			{ children }
		</button>
	)
}

export default Button;