/**
 * Округляет числа до сотых
 * @param num
 * @returns {number}
 */
const roundToTwo = (num) => Math.round(num * 100) / 100;

/**
 * Возвращает сокращенную строку
 * @param text string
 * @param max number
 * @returns {*|string} 'string...'
 */
const getShortFormattedText = (text, max) => {
	if (text.length >= max) return text.slice(0, (max - 3)) + "...";

	return text;
};

/**
 * Функция скролла
 * @param args
 */
const scroll = (...args) => window.scrollTo(args);

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

/**
 * Возвращает рандомный элемент массива
 * @param array
 * @returns {*}
 */
const getRandomArrayElem = (array) => {
	const index = Math.floor(Math.random() * array?.length - 2);

	return array?.splice(index, 1)[0];
};

export {
	roundToTwo,
	scroll,
	getShortFormattedText,
	generateCode,
	getRandomArrayElem
};