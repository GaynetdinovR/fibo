// API функции
export {
	getProductsFromDB,
	authorization,
	getUserByPhoneFromDB,
	getPromosFromDB,
	updateUserDataByPhone,
	getAddressHint
} from "./api.js";

// Функции корзины
export { getCartSum, getSumWithDiscount } from "./cart.js";

// Пользовательские функции
export { updateUserAddress } from "./user.js";

// Вспомогательные функции
export {
	roundToTwo,
	scroll,
	getShortFormattedText,
	generateCode,
	getRandomArrayElem
} from "./helpers.js";

// Функции для работы с продуктами
export {
	formatDefaultProductToCart,
	filterProductsByType,
	getRandom4NewProducts
} from "./products.js";

// Функции для работы с телефонами
export {
	formatPhoneFromInternational,
	formatPhoneToInternational
} from "./phone.js";
