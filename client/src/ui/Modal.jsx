import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const Modal = ({ children, className, isOpen, setOpen }) => {
	return (
		<div
			className={isOpen ? styles.modal__wrapper : styles.modal__none}
			onClick={() => setOpen(false)}
		>
			<aside onClick={(e) => e.stopPropagation()} className={classNames(className, styles.modal)}>
				<button
					className={styles.modal__close_btn}
					onClick={() => {
						setOpen(false);
					}}
				>
					<img src="./icons/cross.png" alt="close" />
				</button>
				{children}
			</aside>
		</div>
	);
};

export default Modal;
