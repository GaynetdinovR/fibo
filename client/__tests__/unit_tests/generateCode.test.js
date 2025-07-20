import { test, expect } from "@jest/globals";
import { generateCode } from "../../src/utils/functions.js";

test("generateCode", () => {
	expect(generateCode()).toBeTruthy();
	expect(typeof generateCode()).toBe("string");
});