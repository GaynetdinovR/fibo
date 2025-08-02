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
	if (!phone) return false;

	const countryCode = "+7";
	const areaCode = phone.substring(1, 4);
	const firstPart = phone.substring(4, 7);
	const secondPart = phone.substring(7, 9);
	const thirdPart = phone.substring(9, 11);

	return `${countryCode} ${areaCode} ${firstPart} ${secondPart}-${thirdPart}`;
};

export {
	formatPhoneFromInternational,
	formatPhoneToInternational
}