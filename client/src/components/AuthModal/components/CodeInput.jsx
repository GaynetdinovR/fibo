import styles from "../../../styles/components/AuthModal.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { generateCode } from "../../../utils/functions.js";
import { NotificationManager } from "react-notifications";

const CodeInput = ({ codeState }) => {
	const { setCodeInput, setCode, setCodeErrored, isCodeErrored } = codeState;

	const handleClick = () => {
		const generatedCode = generateCode();

		NotificationManager.info("Код из СМС: " + generatedCode);

		setCode(generatedCode);
	};

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
				setVal={setCodeInput}
				errorInfo={{
					isErrored: isCodeErrored,
					error: "Неверный код"
				}}
			/>

			<DashedLink
				onClickFn={handleClick}
				className={styles.auth_modal__dashed_link}
			>
				Получить новый код
			</DashedLink>
		</label>
	);
};

export default CodeInput;
