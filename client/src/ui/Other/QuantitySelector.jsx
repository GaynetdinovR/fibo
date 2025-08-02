import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";

const QuantitySelector = ({ className, count, setCount, min, max }) => {
	const handleDecrement = () => {
		const newValue = Math.max(count - 1, min);
		setCount(newValue);
	};

	const handleIncrement = () => {
		const newValue = Math.min(count + 1, max);
		setCount(newValue);
	};

	return (
		<div className={classNames(styles.quantity_selector, className)}>
			<button
				className={styles.quantity_selector__step_btn}
				onClick={handleDecrement}
				disabled={count <= min}
			>
				-
			</button>

			<span className={styles.quantity_selector__count}>{count}</span>

			<button
				className={styles.quantity_selector__step_btn}
				disabled={count >= max}
				onClick={handleIncrement}
			>
				+
			</button>
		</div>
	);
};

export default QuantitySelector;
