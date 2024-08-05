import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Address from "../../src/components/Address/Address.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Address/>).toJSON();
	expect(tree).toMatchSnapshot();
});
