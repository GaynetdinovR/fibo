import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";
import AddressInput from "./AddressInput.jsx";
import DashedLink from "../TextElements/DashedLink.jsx";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../Providers/ModalProvider.jsx";

const AddressInputWrap = ({ userData, className }) => {
	const { setAddressOpen } = useContext(ModalContext);

	const [addressData, setAddressDataLocal] = useState({
		address: userData.address?.address || "",
		entrance: userData.address?.entrance || "",
		floor: userData.address?.floor || "",
		intercome_code: userData.address?.intercome_code || "",
		apartment: userData.address?.apartment || ""
	});

	useEffect(() => {
		if (userData?.address) {
			const { address, entrance, floor, intercome_code, apartment } =
				userData.address;

			setAddressDataLocal({
				address: address || "",
				entrance: entrance || "",
				floor: floor || "",
				intercome_code: intercome_code || "",
				apartment: apartment || ""
			});
		}
	}, [userData]);

	const handleClick = () => setAddressOpen(true);

	return (
		<div className={classNames(styles.input_user__wrap, className)}>
			<label className={styles.input_user__label}>
				<span className={styles.input_user__span}>Адрес</span>
				<AddressInput
					data={addressData}
					setData={setAddressDataLocal}
					isDisabled={true}
				/>
			</label>

			<DashedLink
				onClickFn={handleClick}
				className={styles.input_user__address_link}
			>
				Изменить
			</DashedLink>
		</div>
	);
};

export default AddressInputWrap;
