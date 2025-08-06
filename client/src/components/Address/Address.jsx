import styles from "../../styles/components/Address.module.sass";
import PhoneNumber from "../../ui/Other/PhoneNumber.jsx";
import GoogleMap from "../../ui/Other/GoogleMap.jsx";
import Text from "../../ui/TextElements/Text.jsx";
import { memo } from "react";

const Address = () => {
	return (
		<section className={styles.address}>
			<GoogleMap className={styles.address__map} />

			<PhoneNumber
				className={styles.address__phone_number}
				phoneNumber={"8 800 333-36-62"}
			/>

			<address className={styles.address__address}>
				ул. Проспект Вернадского 86В
			</address>

			<Text className={styles.address__text}>
				Доставка и самовывоз 10:00 — 23:00
			</Text>
		</section>
	);
};
export default memo(Address);
