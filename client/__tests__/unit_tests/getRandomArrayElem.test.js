import { test, expect } from "@jest/globals";
import { getRandomArrayElem } from "../../src/utils/functions.js";

test('getRandomArrayElem', () => {
	expect(getRandomArrayElem([1, 2, 3, 4])).toBeTruthy();
})