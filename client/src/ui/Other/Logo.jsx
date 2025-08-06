import styles from "../../styles/Ui.module.sass";
import { Link } from "react-router-dom";

const Logo = ({ className, onClick = () => {} }) => {
	return (
		<div className={className}>
			<Link onClick={onClick} to={"/"} className={styles.logo}>
				<img src="./icons/logo_1.webp" alt="logo" />
			</Link>
		</div>
	);
};

export default Logo;