const url = "http://localhost:5000";

/**
 * Возвращает продукты
 * @returns {Promise<any>}
 */
const getProductsFromDB = async () => {
	const response = await fetch(`${url}/products`);
	const body = await response.json();

	if (response.status !== 200) throw Error(body.message);

	return body;
};

/**
 * Возвращает акции
 * @returns {Promise<any>}
 */
const getPromosFromDB = async () => {
	const response = await fetch(`${url}/promos`);
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
	const response = await fetch(`${url}/getuser`, {
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
	const response = await fetch(`${url}/auth`, {
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
	try {
		const response = await fetch(`${url}/updateuser`, {
			method: "POST",
			body: JSON.stringify({ userPhone, userData }),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

		return await response.json();
	} catch (error) {
		console.error("Ошибка при обновлении данных:", error);
		throw error;
	}
};

const getAddressHint = async (query) => {
	const url =
		"http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
	const token = "d88ca959012a2572de31939e24d0e039b6e85660";
	const options = {
		method: "POST",
		mode: "cors",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: "Token " + token
		},
		body: JSON.stringify({
			query: query,
			locations: [
				{
					region: "Москва"
				}
			]
		})
	};

	const response = await fetch(url, options);

	const body = await response.json();

	if (response.status !== 200) throw Error(body.message);

	return body;
};

export {
	getProductsFromDB,
	authorization,
	getUserByPhoneFromDB,
	getPromosFromDB,
	updateUserDataByPhone,
	getAddressHint
};
