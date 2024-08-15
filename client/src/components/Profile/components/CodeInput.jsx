import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { codeSentNotification } from "../../../scripts/functions.js";
import { useState } from "react";
import { NotificationManager } from "react-notifications";

const CodeInput = ({ changePhone }) => {
	const [code, setCode] = useState("");
	const [codeInput, setCodeInput] = useState("");
	const [isCodeErrored, setCodeErrored] = useState(false);

	const checkCode = () => {
		if (codeInput !== code) return setCodeErrored(true);

		NotificationManager.success("Вы успешно поменяли номер телефона!");
		changePhone();
		setCode("");

	};

	return (
		<div className={styles.profile__input_wrap}>
			<label
				className={styles.profile__input_label}
				onClick={() => setCodeErrored(false)}
			>
				<span className={styles.profile__input_span}>Код</span>

				<Input
					className={styles.profile__input}
					placeholder={"9999"}
					mask={"9999"}
					val={codeInput}
					setVal={setCodeInput}
					isDisabled={false}
					errorInfo={{
						isErrored: isCodeErrored,
						error: "Неверный код"
					}}
				/>
			</label>

			{code ? (
				<DashedLink
					onClickFn={checkCode}
					className={styles.profile__input_link}
				>
					Поменять номер
				</DashedLink>
			) : null}

			<DashedLink
				onClickFn={() => {
					setCode(codeSentNotification());
				}}
				className={styles.profile__input_link}
			>
				Выслать код
			</DashedLink>
		</div>
	);
};

export default CodeInput;
