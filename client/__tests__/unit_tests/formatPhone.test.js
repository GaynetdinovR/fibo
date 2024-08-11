import { test, expect } from "@jest/globals";
import { formatPhone } from "../../src/scripts/functions.js";

const phone = '+7 999 999 99-99'
const expectedPhone = '89999999999'

test("formatPhone", () => {
	expect(formatPhone(phone)).toBe(expectedPhone);
});