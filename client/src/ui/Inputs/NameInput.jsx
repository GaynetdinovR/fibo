import { useEffect } from "react";
import { updateUserDataByPhone } from "../../utils/api.js";
import { useDispatch } from "react-redux";
import { setName } from "../../store/userSlice/userSlice.js";

import { NotificationManager } from "react-notifications";
import { useFormState } from "../../hooks/useFormState.js";

import InputWithDashedLink from "./InputWithDashedLink.jsx";

const NameInput = ({ userData, className }) => {
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
				NotificationManager.success("Имя изменено");
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
		<InputWithDashedLink
			inputData={{
				placeholder: placeholder,
				setVal: setVal,
				isDisabled: isNameDisabled,
				errorInfo: {
					isErrored: isNameErrored,
					error: "Поле для имени не может быть пустым"
				}
			}}
			className={className}
			name={"Имя"}
			onClickFn={handleChangeOrSave}
		/>
	);
};

export default NameInput;
