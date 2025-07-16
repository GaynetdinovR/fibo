import styles from "../../../styles/components/Profile.module.sass";
import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useEffect } from "react";
import { updateUserDataByPhone } from "../../../scripts/api.js";
import { useDispatch } from "react-redux";
import { setName } from "../../../store/userSlice/userSlice.js";
import { useFormState } from "../../../scripts/hooks.js";

const NameInput = ({ userData }) => {
	const dispatch = useDispatch();

	const [
		value,
		setVal,
		isNameDisabled,
		setNameDisabled,
		isNameErrored,
		setNameErrored
	] = useFormState();

	/**
	 * Устанавливает имя в input из store
	 */
	const setUserNameToInput = () => {
		setVal(userData.name);

		setNameDisabled(true);
	};

	useEffect(() => {
		if (!userData.name) return;

		setUserNameToInput();
	}, [userData.phone]);

	/**
	 * Логика при нажатии "Изменить" или "Сохранить"
	 * Если имя вписано в input, то оно обновляется в БД и в store
	 */
	const changeOrSaveClicked = async () => {
		if (value.length === 0) return setNameErrored(true);

		try {
			setNameErrored(false);
			dispatch(setName(value));
			await updateUserDataByPhone(userData.phone, { name: value });
			setNameDisabled(!isNameDisabled);
		} catch (error) {
			console.error("Update user data by phone errored:", error);
			setNameErrored(true);
		}

	};

	return (
		<div className={styles.profile__input_wrap}>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>Имя</span>

				<Input
					className={styles.profile__name_input}
					placeholder={"Имя"}
					setVal={setVal}
					isDisabled={isNameDisabled}
					errorInfo={{
						isErrored: isNameErrored,
						error: "Поле для имени не может быть пустым"
					}}
				/>
			</label>

			<DashedLink
				onClickFn={() => changeOrSaveClicked()}
				className={styles.profile__input_link}
			>
				{isNameDisabled ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default NameInput;