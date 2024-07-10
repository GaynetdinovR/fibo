import styles from '../styles/Ui.module.sass'
import classNames from "classnames";

const Link = ({children, className, href}) => {
	return (
		<a href={href} className={classNames(className, styles.link)}>
			{children}
		</a>
	)
}

export default Link;