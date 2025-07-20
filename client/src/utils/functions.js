import { NotificationManager } from "react-notifications";
import { updateUserDataByPhone } from "./api.js";

/**
 * Возвращает рандомный элемент массива
 * @param array
 * @returns {*}
 */
const getRandomArrayElem = (array) => {
	const index = Math.floor(Math.random() * array?.length - 2);

	return array?.splice(index, 1)[0];
};

/**
 * Возвращает 4 рандомных НОВЫХ {is_new: true} продукта из массива продуктов
 * @param products [{}, {}, ...]
 * @returns array
 */
const getRandom4NewProducts = (products) => {
	if (!products) return [];

	const res = [];
	const newProducts = products?.filter((product) => product?.is_new);

	for (let i = 0; i < 4; i++) {
		res.push(getRandomArrayElem(newProducts));
	}

	return res;
};

/**
 * Форматирует номер телефона из +7 999... в 8999...
 * @param phone string
 * @returns string
 */
const formatPhoneFromInternational = (phone) => {
	let res = "";

	for (const symbol of phone.split("")) {
		if (symbol === "-" || symbol === " " || symbol === "+") continue;

		res += symbol;
	}

	res = "8" + res.slice(1);

	return res;
};

/**
 * Форматирует номер телефона из 8999... в +7 999...
 * @param phone string
 * @returns string
 */
const formatPhoneToInternational = (phone) => {
	if(!phone) return false;

	const countryCode = "+7";
	const areaCode = phone.substring(1, 4);
	const firstPart = phone.substring(4, 7);
	const secondPart = phone.substring(7, 9);
	const thirdPart = phone.substring(9, 11);

	return `${countryCode} ${areaCode} ${firstPart} ${secondPart}-${thirdPart}`;
};

/**
 * Генерирует случайный 4-х значный код
 * @returns string
 */
const generateCode = () => {
	const array = [];

	for (let i = 0; i < 4; i++) {
		array.push(Math.floor(Math.random() * 10));
	}

	return array.join("");
};

/**
 * Уведомление о высланном коде
 */
const codeSentNotification = () => {

};

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

/**
 * Возвращает список продуктов по типу
 * @param products
 * @param type
 * @returns {*}
 */
const filterProductsByType = (products, type) => {
	return products.filter((item) => item.type === type);
}

/**
 * Округляет числа до сотых
 * @param num
 * @returns {number}
 */
const roundToTwo = (num) => Math.round(num * 100) / 100;

export {
	getRandom4NewProducts,
	getRandomArrayElem,
	formatPhoneFromInternational,
	formatPhoneToInternational,
	generateCode,
	codeSentNotification,
	updateUserAddress,
	filterProductsByType,
	roundToTwo
};
