import { test, expect } from "@jest/globals";
import { formatPhoneFromInternational } from "../../src/utils/functions.js";

const phone = '+7 999 999 99-99'
const expectedPhone = '89999999999'

test("formatPhone", () => {
	expect(formatPhoneFromInternational(phone)).toBe(expectedPhone);
});