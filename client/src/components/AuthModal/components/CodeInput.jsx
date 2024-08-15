import styles from "../../../styles/components/AuthModal.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { codeSentNotification } from "../../../scripts/functions.js";

const CodeInput = ({ setInputVal, setCode, isCodeErrored, setCodeErrored }) => {

	return (
		<label
			className={styles.auth_modal__code_input_wrap}
			onClick={() => setCodeErrored(false)}
		>
			<span className={styles.auth_modal__code_input_label}>
				Код из СМС
			</span>

			<Input
				mask={"9999"}
				placeholder={"9999"}
				className={styles.auth_modal__code_input}
				setVal={setInputVal}
				errorInfo={{
					isErrored: isCodeErrored,
					error: "Неверный код"
				}}
			/>

			<DashedLink
				onClickFn={() => setCode(codeSentNotification())}
				className={styles.auth_modal__dashed_link}
			>
				Получить новый код
			</DashedLink>
		</label>
	);
};

export default CodeInput;
