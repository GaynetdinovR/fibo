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
const formatPhone = (phone) => {
	let res = "";

	for (const symbol of phone.split("")) {
		if (symbol === "-" || symbol == " " || symbol === "+") continue;

		res += symbol;
	}

	res = "8" + res.slice(1);

	return res;
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

export {
	getRandom4NewProducts,
	getRandomArrayElem,
	formatPhone,
	generateCode
};