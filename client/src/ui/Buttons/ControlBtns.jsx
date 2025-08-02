import styles from "../../styles/Ui.module.sass";
import RouterLink from "../TextElements/RouterLink.jsx";
import Button from "./Button.jsx";
import classNames from "classnames";

const ControlBtns = ({ className, btnsData }) => {
	return (
		<div className={classNames(styles.control_btns, className)}>
			<RouterLink
				to={btnsData.backBtn.to}
				className={styles.control_btns__back_btn}
			>
				{btnsData.backBtn.text}
			</RouterLink>
			<Button
				onClickFn={btnsData.continueBtn.onClickFn}
				className={styles.control_btns__continue_btn}
			>
				{btnsData.continueBtn.text}
			</Button>
		</div>
	);
};

export default ControlBtns;