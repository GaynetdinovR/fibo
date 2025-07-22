import PhoneInput from "./PhoneInput.jsx";
import CodeInput from "./CodeInput.jsx";
import { formatPhoneFromInternational } from "../../../utils/functions.js";
import { updateUserDataByPhone } from "../../../utils/api.js";
import { setPhone } from "../../../store/userSlice/userSlice.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { NotificationManager } from "react-notifications";

const PhoneEditSection = ({ user }) => {
	const dispatch = useDispatch();

	const [tempPhone, setTempPhone] = useState(user.phone);
	const [isEditingPhone, setIsEditingPhone] = useState(false);
	const [showCodeInput, setShowCodeInput] = useState(false);
	const [generatedCode, setGeneratedCode] = useState("");

	/**
	 * Обработчик изменения телефона
	 */
	const handlePhoneSubmit = () => {
		setShowCodeInput(true);
		setIsEditingPhone(false);
	};

	/**
	 * Обработчик подтверждения кода
	 */
	const handleCodeConfirm = async () => {
		try {
			const formattedPhone = formatPhoneFromInternational(tempPhone);
			console.log(tempPhone);
			await updateUserDataByPhone(user.phone, { phone: formattedPhone });

			dispatch(setPhone(formattedPhone));
			setShowCodeInput(false);

			NotificationManager.success("Номер телефона успешно изменен!");
		} catch (error) {
			console.error("Error changing phone:", error);
		}
	};

	return (
		<>
			<PhoneInput
				phone={tempPhone}
				setPhone={setTempPhone}
				isEditing={isEditingPhone}
				setIsEditing={setIsEditingPhone}
				onSubmit={handlePhoneSubmit}
			/>

			{showCodeInput && (
				<CodeInput
					onConfirm={handleCodeConfirm}
					generatedCode={generatedCode}
					setGeneratedCode={setGeneratedCode}
				/>
			)}
		</>
	);
};

export default PhoneEditSection;
