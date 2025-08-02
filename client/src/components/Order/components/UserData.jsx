import styles from "../../../styles/components/Order.module.sass";
import { useSelector } from "react-redux";
import NameInput from "../../../ui/Inputs/NameInput.jsx";
import AddressInputWrap from "../../../ui/Inputs/AddressInputWrap.jsx";
import PhoneInput from "../../../ui/Other/PhoneEditSection/PhoneInput.jsx";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../ui/Providers/ModalProvider.jsx";
import InputWithDashedLink from "../../../ui/Inputs/InputWithDashedLink.jsx";
import { formatPhoneToInternational } from "../../../utils/index.js";
import PhoneEditSection from "../../../ui/Other/PhoneEditSection/PhoneEditSection.jsx";
import PhoneInputSection from "./PhoneInputSection.jsx";
import Checkbox from "../../../ui/Inputs/Checkbox.jsx";

const UserData = ({ user, isPickup, setIsPickup }) => {
	const isShowAddressInput = user.isLogged && !isPickup;

	return (
		<div className={styles.order__user_data}>
			<PhoneInputSection user={user} />

			{user.isLogged && (
				<NameInput
					className={styles.order__name_input}
					userData={{ phone: user.phone, name: user.name }}
				/>
			)}

			{isShowAddressInput && (
				<AddressInputWrap
					userData={{ address: user.address, phone: user.phone }}
					className={styles.order__address_input}
				/>
			)}

			<Checkbox
				className={styles.order__is_pickup_checkbox}
				checkBoxData={{
					isChecked: isPickup,
					setChecked: setIsPickup
				}}
				text={"Самовывоз"}
			/>
		</div>
	);
};

export default UserData;
