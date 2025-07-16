import styles from "../../../styles/components/Profile.module.sass";
import classNames from "classnames";
import AddressInput from "../../../ui/AddressInput.jsx";
import DashedLink from "../../../ui/DashedLink.jsx";
import { useState } from "react";
import { setAddressData } from "../../../store/userSlice/userSlice.js";
import { updateUserAddress } from "../../../scripts/functions.js";
import { useDispatch } from "react-redux";

const AddressInputWrap = ({ userData }) => {
	const dispatch = useDispatch();

	const [isAddressDisabled, setDisabledAddress] = useState(true);
	const [addressData, setAddressDataLocal] = useState({
		address: userData?.address || "",
		entrance: userData?.entrance || "",
		floor: userData?.floor || "",
		intercome_code: userData?.intercome_code || "",
		apartment: userData?.apartment || ""
	});

	/**
	 * @param val address(object)
	 */
	const setAddressToStore = (val) => dispatch(setAddressData(val));

	/**
	 * Проверяет пустой ли адрес(input)
	 * @returns boolean
	 */
	const isAddressDataEmpty = () => {
		for (let key in addressData) {
			if (!addressData[key]) return true;
		}

		return false;
	};

	/**
	 * Логика при нажатии "Изменить" или "Сохранить"
	 * Если input не пустой, то адрес обновляется в БД
	 */
	const changeOrSaveClicked = async () => {
		if (isAddressDisabled) return setDisabledAddress(false);
		if (isAddressDataEmpty()) return;

		try {
			await updateUserAddress(userData.phone, addressData, setAddressToStore);
			setDisabledAddress(true);
		} catch (error) {
			console.error("User address update error:", error);
		}
	};

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
					isDisabled={isAddressDisabled}
				/>
			</label>

			<DashedLink
				onClickFn={changeOrSaveClicked}
				className={styles.profile__address_link}
			>
				{isAddressDisabled ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default AddressInputWrap;