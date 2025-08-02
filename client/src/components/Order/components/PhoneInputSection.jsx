import PhoneEditSection from "../../../ui/Other/PhoneEditSection/PhoneEditSection.jsx";
import styles from "../../../styles/components/Order.module.sass";
import InputWithDashedLink from "../../../ui/Inputs/InputWithDashedLink.jsx";
import { formatPhoneToInternational } from "../../../utils/index.js";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../ui/Providers/ModalProvider.jsx";

const PhoneInputSection = ({ user }) => {
	const { setAuth } = useContext(ModalContext);
	const [phone, setPhone] = useState(user.phone);
	const phonePlaceholder =
		formatPhoneToInternational(phone) || "+7 999 999 99-99";

	useEffect(() => {
		setPhone(user.phone);
	}, [user]);

	const handlePhoneEditClick = () => {
		setAuth(true);
	};

	const inputProps = {
		inputData: {
			placeholder: phonePlaceholder,
			setVal: setPhone,
			isDisabled: true,
			errorInfo: {
				isErrored: false,
				error: ""
			}
		},
		className: styles.order__phone_input,
		name: "Номер телефона",
		onClickFn: handlePhoneEditClick
	};

	return user.isLogged ? (
		<PhoneEditSection
			user={user}
			inputClassNames={{
				phoneInput: styles.order__phone_input,
				codeInput: styles.order__code_input
			}}
		/>
	) : (
		<InputWithDashedLink {...inputProps} />
	);
};

export default PhoneInputSection;
