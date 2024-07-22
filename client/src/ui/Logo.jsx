import styles from '../styles/Ui.module.sass'
import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link to={'/'} className={styles.logo}>
			<img src="./icons/logo_1.png" alt="logo" />
		</Link>
	)
}

export default Logo;