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
 * Отправляет акции в запрос
 * @param req
 * @param res
 */
const getPromos = (req, res) => {
	try {
		knex("promos").then((data) => res.json(data));
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
		const result = await knex("users")
			.where(userPhone)
			.then((data) => res.json(data));

		if (result) return res.status(200).json({ message: "User found" });

		res.status(404).json({ error: "User not found" });
	} catch (error) {
		console.error(error);

		res.status(500).json({ error: "Internal Server Error" });
	}
};

const updateUserData = async (req, res) => {
	const { userPhone, userData } = req.body;

	try {
		const result = await knex("users")
			.update(userData)
			.where("phone", userPhone);

		if (result) return res.status(200).json({ message: "User data updated successfully" });

		res.status(404).json({ error: "User not found" });
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

		if (!user) await knex("users").insert(userPhone);
	} catch (error) {
		console.error(error);

		res.status(500).json({ error: "Internal Server Error" });
	}
};

export {
	getProducts,
	authorization,
	getUserByPhone,
	getPromos,
	updateUserData
};