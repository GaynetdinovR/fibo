import styles from "../../../styles/components/Profile.module.sass";
import classNames from "classnames";
import AddressInput from "../../../ui/AddressInput.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../ui/ModalProvider.jsx";

const AddressInputWrap = ({ userData }) => {
	const { setAddress } = useContext(ModalContext);

	const [addressData, setAddressDataLocal] = useState({
		address: "",
		entrance: "",
		floor: "",
		intercome_code: "",
		apartment: ""
	});

	useEffect(() => {
		if (userData?.address) {
			try {
				const parsedAddress = JSON.parse(userData.address);

				setAddressDataLocal({
					address: parsedAddress?.address || "",
					entrance: parsedAddress?.entrance || "",
					floor: parsedAddress?.floor || "",
					intercome_code: parsedAddress?.intercome_code || "",
					apartment: parsedAddress?.apartment || ""
				});
			} catch (e) {
				console.error("Error parsing address:", e);
			}
		}
	}, [userData]);

	const handleClick = () => setAddress(true);

	return (
		<div
			className={classNames(
				styles.profile__input_wrap,
				styles.profile__address_wrap
			)}
		>
			<label className={styles.profile__input_label}>
				<span className={styles.profile__input_span}>Адрес</span>
				<AddressInput
					data={addressData}
					setData={setAddressDataLocal}
					isDisabled={true}
				/>
			</label>

			<DashedLink
				onClickFn={handleClick}
				className={styles.profile__address_link}
			>
				Изменить
			</DashedLink>
		</div>
	);
};

export default AddressInputWrap;
