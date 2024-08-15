import styles from "../../../styles/Ui.module.sass";
import InputMask from "react-input-mask";
import classNames from "classnames";

const AddressInput = () => {
	const cityStreetHouseClass = classNames(
		styles.address__city_street_house,
		styles.input
	);

	return (
		<div className={styles.address}>
			<div className={styles.address__city_street_house_wrap}>
				<InputMask
					className={cityStreetHouseClass}
					placeholder={"Город, улица, дом"}
					disabled={true}
				/>
			</div>

			<InputMask
				className={classNames(styles.input, styles.address__entrance)}
				placeholder={"Подъезд"}
				disabled={true}
			/>

			<InputMask
				className={classNames(styles.input, styles.address__floor)}
				placeholder={"Этаж"}
				disabled={true}
			/>

			<InputMask
				className={classNames(styles.input, styles.address__apartment)}
				placeholder={"Квартира"}
				disabled={true}
			/>

			<InputMask
				className={classNames(styles.input, styles.address__intercome_code)}
				placeholder={"Код домофона"}
				disabled={true}
			/>
		</div>
	);
};

export default AddressInput;