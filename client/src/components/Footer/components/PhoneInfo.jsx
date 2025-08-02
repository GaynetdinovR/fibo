import styles from "../../../styles/components/Footer.module.sass";
import PhoneNumber from "../../../ui/Other/PhoneNumber.jsx";
import OvalButton from "../../../ui/Buttons/OvalButton.jsx";

const PhoneInfo = () => {
	return (
		<div className={styles.footer__phone_info}>
			<PhoneNumber
				phoneNumber={"8 499 391-84-49"}
				className={styles.footer__phone_number}
			/>

			<OvalButton className={styles.footer__get_call}>
				Заказать звонок
			</OvalButton>
		</div>
	);
};

export default PhoneInfo;