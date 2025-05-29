import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const Textarea = ({ className, placeholder, setVal, maxlength }) => {
	return (
		<textarea
			className={classNames(styles.textarea, className)}
			placeholder={placeholder}
			onChange={(e) => setVal(e.target.value)}
			maxLength={300}
		/>
	);
};

export default Textarea;
