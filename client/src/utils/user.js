import { updateUserDataByPhone } from "./api.js";
import { NotificationManager } from "react-notifications";

/**
 * Действия при обновлении адреса пользователя
 * @param address object
 */
const updateUserAddress = async (userPhone, address, setAddressToStore) => {
	const userData = { address: JSON.stringify(address) };

	await updateUserDataByPhone(userPhone, userData);

	NotificationManager.success("Адрес успешно изменен");

	setAddressToStore({ ...address });
};

export {
	updateUserAddress
};