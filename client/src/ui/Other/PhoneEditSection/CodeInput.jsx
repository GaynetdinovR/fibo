import styles from "../../../styles/Ui.module.sass";
import Input from "../../Inputs/Input/Input.jsx";
import DashedLink from "../../TextElements/DashedLink.jsx";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { generateCode } from "../../../utils/index.js";
import classNames from "classnames";
import InputWithDashedLink from "../../Inputs/InputWithDashedLink.jsx";

const CodeInput = ({
	onConfirm,
	generatedCode,
	setGeneratedCode,
	className
}) => {
	const [code, setCode] = useState("");
	const [isErrored, setIsErrored] = useState(false);

	useEffect(() => {
		sendCode();
	}, []);

	const sendCode = () => {
		const newCode = generateCode();
		setGeneratedCode(newCode);
		NotificationManager.info(`Код подтверждения: ${newCode}`);
	};

	const handleConfirm = () => {
		if (code !== generatedCode) {
			return setIsErrored(true);
		}

		setIsErrored(false);
		onConfirm();
	};

	return (
		<div className={classNames(styles.input_user__wrap, className)}>
			<label className={styles.input_user__label}>
				<span className={styles.input_user__span}>Код подтверждения</span>
				<Input
					className={styles.input_user__code_input}
					placeholder={"Введите 4-значный код"}
					mask={"9999"}
					val={code}
					setVal={setCode}
					isDisabled={false}
					errorInfo={{
						isErrored: isErrored,
						error: "Неверный код подтверждения"
					}}
					autoComplete="off"
				/>
			</label>

			<DashedLink
				onClickFn={handleConfirm}
				className={styles.input_user__link}
			>
				Подтвердить
			</DashedLink>

			<DashedLink
				onClickFn={sendCode}
				className={styles.input_user__link}
			>
				Выслать код
			</DashedLink>
		</div>
	);
};

export default CodeInput;