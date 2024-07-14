import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import H4 from "../../src/ui/H4.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<H4>H4</H4>).toJSON();
	expect(tree).toMatchSnapshot();
});
