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
 * Возвращает продукты из БД
 * @returns {Promise<any>}
 */
const getProductsFromDB = async () => {
	const response = await fetch("/products");
	const body = await response.json();

	if (response.status !== 200) throw Error(body.message);

	return body;
};


export {
	getRandom4NewProducts,
	getProductsFromDB,
	getRandomArrayElem
};