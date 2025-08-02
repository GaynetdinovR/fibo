import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import DashedLink from "../../src/ui/TextElements/DashedLink.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<DashedLink>DashedLink</DashedLink>).toJSON();
	expect(tree).toMatchSnapshot();
});
