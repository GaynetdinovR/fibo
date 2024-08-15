/**
 * Возвращает продукты
 * @returns {Promise<any>}
 */
const getProductsFromDB = async () => {
	const response = await fetch("/products");
	const body = await response.json();

	if (response.status !== 200) throw Error(body.message);

	return body;
};

/**
 * Возвращает акции
 * @returns {Promise<any>}
 */
const getPromosFromDB = async () => {
	const response = await fetch("/promos");
	const body = await response.json();

	if (response.status !== 200) throw Error(body.message);

	return body;
};

/**
 * Возвращает пользователя по номеру телефона
 * @param userPhone
 * @returns {Promise<any>}
 */
const getUserByPhoneFromDB = async (userPhone) => {
	const response = await fetch("/getuser", {
		method: "POST",
		body: JSON.stringify({ phone: userPhone }),
		headers: {
			"Content-Type": "application/json"
		}
	});

	const body = await response.json();

	if (response.status !== 200) throw Error(body.message);

	return body;
};

/**
 * Авторизует пользователя по номеру телефона
 * @param userPhone string
 * @returns {Promise<void>}
 */
const authorization = async (userPhone) => {
	const response = await fetch("/auth", {
		method: "POST",
		body: JSON.stringify({ phone: userPhone }),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (response.status !== 200) throw Error(response.statusText);
};

/**
 * Обновляет данные пользователя по номеру телефона
 * @param userPhone string (8999...)
 * @param userData object
 * @returns {Promise<void>}
 */
const updateUserDataByPhone = async (userPhone, userData) => {
	const response = await fetch("/updateuser", {
		method: "POST",
		body: JSON.stringify({ userPhone: userPhone, userData: userData }),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (response.status !== 200) throw Error(response.statusText);
};

export {
	getProductsFromDB,
	authorization,
	getUserByPhoneFromDB,
	getPromosFromDB,
	updateUserDataByPhone
};
