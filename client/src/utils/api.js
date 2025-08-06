const API_CONFIG = {
	baseUrl: "https://fibo-d8ma.onrender.com/",
	headers: {
		"Content-Type": "application/json"
	}
};

/**
 * Общая функция для запросов в Backend
 * @param endpoint
 * @param method
 * @param body
 * @returns {Promise<any>}
 */
async function apiRequest(endpoint, method = "GET", body = null) {
	const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`, {
		method,
		headers: API_CONFIG.headers,
		body: body ? JSON.stringify(body) : null
	});

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}));

		const error = new Error(errorData.message || "Request failed");
		error.status = response.status;
		error.data = errorData;

		throw error;
	}

	return response.json();
}

/**
 * Возвращает продукты
 * @returns {Promise<any>}
 */
const getProductsFromDB = async () => apiRequest("/products");

/**
 * Возвращает акции
 * @returns {Promise<any>}
 */
const getPromosFromDB = async () => apiRequest("/promos");

/**
 * Возвращает пользователя по номеру телефона
 * @param userPhone
 * @returns {Promise<any>}
 */
const getUserByPhoneFromDB = async (userPhone) =>
	apiRequest("/getuser", "POST", { phone: userPhone });

/**
 * Возвращает заказы пользователя
 * @param userId number
 * @returns {Promise<*>}
 */
const getOrders = async (userId) =>
	apiRequest("/getorders", "POST", { userId });

/**
 * Авторизует пользователя по номеру телефона
 * @param userPhone string
 * @returns {Promise<void>}
 */
const authorization = async (userPhone) =>
	apiRequest("/auth", "POST", { phone: userPhone });

/**
 * Обновляет данные пользователя по номеру телефона
 * @param userPhone string
 * @param userData object
 * @returns {Promise<void>}
 */
const updateUserDataByPhone = async (userPhone, userData) =>
	apiRequest("/updateuser", "POST", { userPhone, userData });

/**
 * Создает заказ
 * @param userId number
 * @param orderData object
 * @returns {Promise<*>}
 */
const createOrder = async (userId, orderData) =>
	apiRequest("/createorder", "POST", { userId: userId, ...orderData });

/**
 * Получает подсказки адресов через Dadata API
 * @param {string} query - Строка поиска адреса
 * @param {string} [region] - Регион для ограничения поиска (по умолчанию "Москва")
 * @returns {Promise<Array>} - Массив подсказок адресов
 */
const getAddressHint = async (query, region = "Москва") => {
	const url =
		"https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
	const token = "";

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Token ${token}`
			},
			body: JSON.stringify({
				query: query,
				count: 5,
				locations: [{ region }]
			})
		});

		if (!response.ok) {
			throw new Error(`Dadata API error: ${response.status}`);
		}

		const data = await response.json();
		return data.suggestions || [];
	} catch (error) {
		console.error("Address hint error:", error);
		throw error;
	}
};

export {
	getProductsFromDB,
	authorization,
	getUserByPhoneFromDB,
	getPromosFromDB,
	updateUserDataByPhone,
	getAddressHint,
	getOrders,
	createOrder
};
