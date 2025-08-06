import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";
import { useMemo } from "react";

const PhoneNumber = ({ phoneNumber, className }) => {
	const formattedNumber = useMemo(() => {
		return phoneNumber.replace(/\D/g, "");
	}, [phoneNumber]);

	return (
		<a
			href={`tel:${formattedNumber}`}
			className={classNames(className, styles.phone_number)}
			aria-label="Позвонить по номеру телефона"
		>
			{phoneNumber}
		</a>
	);
};

export default PhoneNumber;