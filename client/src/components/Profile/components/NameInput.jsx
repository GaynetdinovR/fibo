import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useState } from "react";

const NameInput = ({ changeName }) => {
	const [name, setName] = useState("");
	const [isNameDisabled, setNameDisabled] = useState(false);
	const [isNameErrored, setNameErrored] = useState(false);

	const checkNameValue = () => {
		if (name.length === 0) return setNameErrored(true);

		setNameErrored(false);
		setNameDisabled(!isNameDisabled);
		changeName(name);
	};

	return (
		<div className={styles.profile__input_wrap}>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>Имя</span>

				<Input
					className={styles.profile__input}
					placeholder={"Имя"}
					setVal={setName}
					isDisabled={isNameDisabled}
					errorInfo={{
						isErrored: isNameErrored,
						error: "Поле для имени не может быть пустым"
					}}
				/>
			</label>

			<DashedLink
				onClickFn={() => checkNameValue()}
				className={styles.profile__input_link}
			>
				{isNameDisabled ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default NameInput;