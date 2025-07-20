import styles from "../../../styles/components/Profile.module.sass";

import { useEffect } from "react";
import { updateUserDataByPhone } from "../../../utils/api.js";
import { useDispatch } from "react-redux";
import { setName } from "../../../store/userSlice/userSlice.js";
import { useFormState } from "../../../utils/hooks.js";

import Input from "../../../ui/Input/Input.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { NotificationManager } from "react-notifications";

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

	useEffect(() => {
		setVal(userData.name || "");
		setNameDisabled(true);
	}, [userData.name]);

	/**
	 * Логика при нажатии "Изменить" или "Сохранить"
	 * Если имя вписано в input, то оно обновляется в БД и в store
	 */
	const handleChangeOrSave = async () => {
		if (!isNameDisabled) {
			if (value.trim().length === 0) return setNameErrored(true);

			try {
				setNameErrored(false);
				dispatch(setName(value));
				await updateUserDataByPhone(userData.phone, { name: value });
				setNameDisabled(true);
				NotificationManager.success('Имя изменено')
			} catch (error) {
				console.error("Update user data by phone errored:", error);
				setNameErrored(true);
			}
		} else {
			setNameDisabled(false);
		}
	};

	const placeholder = userData.name ? userData.name : "Имя";

	return (
		<div className={styles.profile__input_wrap}>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>Имя</span>

				<Input
					className={styles.profile__name_input}
					placeholder={placeholder}
					setVal={setVal}
					isDisabled={isNameDisabled}
					errorInfo={{
						isErrored: isNameErrored,
						error: "Поле для имени не может быть пустым"
					}}
				/>
			</label>

			<DashedLink
				onClickFn={handleChangeOrSave}
				className={styles.profile__input_link}
			>
				{isNameDisabled ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default NameInput;