import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Logo from "../../src/ui/Logo.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Logo/>).toJSON();
	expect(tree).toMatchSnapshot();
});
