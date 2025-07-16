import styles from "../styles/Ui.module.sass";
import { useState } from "react";
import classNames from "classnames";

const Supplement = ({ supplement, onClickFn }) => {
	const [isActive, setActive] = useState(false);

	const className = isActive
		? classNames(styles.supplement, styles.supplement__active)
		: styles.supplement;

	const handleClick = () => {
		onClickFn();
		setActive(!isActive);
	}

	return (
		<button className={className} onClick={handleClick}>
			<div className={styles.supplement__img}>
				<img src={supplement.img_url} alt="supplement" />
			</div>
			<span className={styles.supplement__name}>{supplement.name}</span>
			<span className={styles.supplement__price}>{supplement.price}₽</span>
		</button>
	);
};

export default Supplement;