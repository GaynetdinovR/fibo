import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";
import { generateCode } from "../../../utils/functions.js";

const CodeInput = ({ onConfirm, generatedCode, setGeneratedCode }) => {
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
		<div className={styles.profile__input_wrap}>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>Код подтверждения</span>
				<Input
					className={styles.profile__input}
					placeholder={"Введите 4-значный код"}
					mask={"9999"}
					val={code}
					setVal={setCode}
					isDisabled={false}
					errorInfo={{
						isErrored: isErrored,
						error: "Неверный код подтверждения"
					}}
				/>
			</label>

			<DashedLink
				onClickFn={handleConfirm}
				className={styles.profile__input_link}
			>
				Подтвердить
			</DashedLink>

			<DashedLink
				onClickFn={sendCode}
				className={styles.profile__input_link}
			>
				Выслать код
			</DashedLink>
		</div>
	);
};

export default CodeInput;