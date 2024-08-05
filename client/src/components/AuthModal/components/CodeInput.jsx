import styles from "../../../styles/components/AuthModal.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { generateCode } from "../../../scripts/functions.js";
import { NotificationManager } from "react-notifications";

const CodeInput = ({ setValToAuthState, authModalState }) => {
	const setCodeInputVal = (val) =>
		setValToAuthState("set_code_input_val", val);

	/**
	 * Уведомление о высланном коде
	 */
	const codeSentNotification = () => {
		const generatedCode = generateCode();

		setValToAuthState("set_code", generatedCode);

		NotificationManager.success(
			"Код из СМС: " + generatedCode,
			"Ваш код выслан"
		);
	};

	return (
		<label
			className={styles.auth_modal__code_input_wrap}
			onClick={() => setValToAuthState("set_code_errored", false)}
		>
			<span className={styles.auth_modal__code_input_label}>
				Код из СМС
			</span>
			<Input
				mask={"9999"}
				placeholder={"9999"}
				className={styles.auth_modal__code_input}
				setVal={setCodeInputVal}
				errorInfo={{
					isErrored: authModalState.isCodeErrored,
					error: "Неверный код"
				}}
			/>
			<DashedLink
				onClickFn={codeSentNotification}
				className={styles.auth_modal__dashed_link}
			>
				Получить новый код
			</DashedLink>
		</label>
	);
};

export default CodeInput;