import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import PhoneNumber from "../../src/ui/PhoneNumber.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<PhoneNumber phoneNumber={"8 499 391-84-49"}/>).toJSON();
	expect(tree).toMatchSnapshot();
});
