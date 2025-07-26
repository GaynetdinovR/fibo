import styles from "../styles/Ui.module.sass";
import { useEffect, useState } from "react";
import classNames from "classnames";

const Supplement = ({
	supplement,
	onClickFn,
	className,
	passedIsActive = undefined
}) => {
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		if (typeof passedIsActive !== "undefined") {
			setActive(passedIsActive);
		}
	}, [passedIsActive]);

	const supplementClassName = isActive
		? classNames(styles.supplement, styles.supplement__active, className)
		: classNames(styles.supplement, className);

	const handleClick = () => {
		onClickFn();
		setActive(!isActive);
	};

	return (
		<button className={supplementClassName} onClick={handleClick}>
			<div className={styles.supplement__img}>
				<img src={supplement.img_url} alt="supplement" />
			</div>
			<span className={styles.supplement__name}>{supplement.name}</span>
			<span className={styles.supplement__price}>{supplement.price}₽</span>
		</button>
	);
};

export default Supplement;