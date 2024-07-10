import styles from "../styles/Ui.module.sass";
import classNames from "classnames";

const PhoneNumber = ({ phoneNumber, className }) => {
	const formatPhoneNumber = () => {
		return phoneNumber
			.split("")
			.filter(item => !isNaN(item) && item != ' ')
			.join('')
	};

	console.log(formatPhoneNumber(phoneNumber));

	return (
		<a href={`tel:${formatPhoneNumber(phoneNumber)}`} className={classNames(className, styles.phone_number)}>
			{phoneNumber}
		</a>
	);
};

export default PhoneNumber;