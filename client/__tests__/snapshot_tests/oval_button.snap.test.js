import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import OvalButton from "../../src/ui/Buttons/OvalButton.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<OvalButton>OvalButton</OvalButton>).toJSON();
	expect(tree).toMatchSnapshot();
});
