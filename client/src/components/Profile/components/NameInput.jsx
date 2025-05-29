import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useEffect, useState } from "react";

const NameInput = ({ user, changeName }) => {
	const [name, setName] = useState("");
	const [isNameDisabled, setNameDisabled] = useState(false);
	const [isNameErrored, setNameErrored] = useState(false);

	useEffect(() => {
		if (!user.name) return;
		const input = document.querySelector("." + styles.profile__name_input);

		input.value = user.name;
		setName(user.name)
		setNameDisabled(true);
	}, [user]);

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
					className={styles.profile__name_input}
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