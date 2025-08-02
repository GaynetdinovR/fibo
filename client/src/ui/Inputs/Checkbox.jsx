import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";

const Checkbox = ({ className, text, checkBoxData, icon = false }) => {
	const handleChange = (e) => checkBoxData?.setChecked(e.target.checked);

	return (
		<div className={classNames(styles.input_user__checkbox, className)}>
			<input
				type="checkbox"
				checked={checkBoxData?.isChecked || false}
				onChange={handleChange}
			/>

			{icon && (
				<div className={styles.input_user__checkbox_icon}>
					<img src={icon} alt="icon" />
				</div>
			)}

			<span className={styles.input_user__span}>{text}</span>
		</div>
	);
};

export default Checkbox;
