import { test, expect } from "@jest/globals";
import { getRandom4NewProducts } from "../../src/scripts/functions.js";

const products = [
	{ is_new: true },
	{ is_new: true },
	{ is_new: false },
	{ is_new: true },
	{ is_new: true },
	{ is_new: false }
];

const expectedValue = [
	{ is_new: true },
	{ is_new: true },
	{ is_new: true },
	{ is_new: true }
];

test("getRandom4NewProducts", () => {
	expect(getRandom4NewProducts(products)).toEqual(expectedValue);
});