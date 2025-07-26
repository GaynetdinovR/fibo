import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const DeleteCrossButton = ({ onClickFn, className }) => {
	return (
		<button
			onClick={onClickFn}
			className={classNames(styles.delete_cross_btn, className)}
		>
			<div></div>
			<div></div>
		</button>
	);
};

export default DeleteCrossButton;
