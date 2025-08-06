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
 * Получает номер телефона и отправляет соответствующего пользователя
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserByPhone = async (req, res) => {
	const userPhone = req.body;

	try {
		const result = await knex("users")
			.where(userPhone)
			.first();

		if (result) return res.status(200).json(result);

		res.status(404).json({ error: "User not found" });
	} catch (error) {
		console.error(error);

		return res.status(500).json({ error: "Internal Server Error" });
	}
};

/**
 * Получает номер телефона и отправляет все заказы пользователя
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUserOrdersByPhone = async (req, res) => {
	const userPhone = req.body;

	try {
		const user = await knex("users")
			.where(userPhone)
			.first();

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		const orders = await knex("orders")
			.where({ user_id: user.id });

		const ordersWithItems = await Promise.all(
			orders.map(async (order) => {
				const items = await knex("order_items")
					.join("products", "order_items.product_id", "products.id")
					.where({ order_id: order.id })
					.select(
						"order_items.*",
						"products.name as product_name",
						"products.description as product_description"
					);

				return {
					...order,
					items
				};
			})
		);

		return res.status(200).json({
			user: {
				id: user.id,
				name: user.name,
				phone: user.phone
			},
			orders: ordersWithItems
		});

	} catch (error) {
		console.error("Error fetching user orders:", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
};

/**
 * Обновляет данные пользователя по номеру телефона
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
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

		res.status(200).json({ message: "Authorizated" });
	} catch (error) {
		console.error(error);

		res.status(500).json({ error: "Internal Server Error" });
	}
};

/**
 * Создает новый заказ
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<void>}
 */
const createOrder = async (req, res) => {
	const { userId, items, paymentMethod, deliveryAddress, isPickup = false } = req.body;

	try {
		const result = await knex.transaction(async (trx) => {
			const [orderId] = await trx('orders').insert({
				user_id: userId,
				payment_method: paymentMethod,
				is_pickup: isPickup,
				delivery_address: isPickup ? null : deliveryAddress,
				status: 'processing',
			});

			await trx('order_items').insert(
				items.map(item => ({
					product_id: item.productId,
					price: item.price,
					count: item.count,
					size: item.size || null,
					type: item.type || null,
					supplements: item.supplements ? JSON.stringify(item.supplements) : null,
					order_id: orderId
				}))
			);


			return { id: orderId };
		});

		return res.status(201).json({
			success: true,
			orderId: result.id,
			message: "Order created successfully"
		});
	} catch (error) {
		console.error('Order creation failed:', error);

		return res.status(500).json({
			error: "Order creation failed",
			message: error.message
		});
	}
};

export {
	getProducts,
	authorization,
	getUserByPhone,
	getPromos,
	updateUserData,
	getUserOrdersByPhone,
	createOrder
};