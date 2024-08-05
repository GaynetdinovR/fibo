import knex from "./database.js";

/**
 * Отправляет продукты в запрос
 * @param req
 * @param res
 */
const getProducts = (req, res) => {
	try {
		knex("products").then((data) => res.json(data));
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

/**
 * Получает номер телефона и отправляет соответсвующего пользователя
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserByPhone = async (req, res) => {
	const userPhone = req.body;

	try {
		knex("users")
			.where(userPhone)
			.then((data) => res.json(data));
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

/**
 * Получает номер телефона, проверяет есть ли пользователь с таким номером, если нет, то создает пользователя
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const authorization = async (req, res) => {
	const userPhone = req.body;

	try {
		const user = await knex("users").where(userPhone).first();

		if (!user)
			await knex("users").insert(userPhone);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export {
	getProducts,
	authorization,
	getUserByPhone
};