import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import LinkUI from "../../src/ui/LinkUI.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<LinkUI>Link</LinkUI>).toJSON();
	expect(tree).toMatchSnapshot();
});

