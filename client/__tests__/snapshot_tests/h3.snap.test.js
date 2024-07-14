import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import H3 from "../../src/ui/H3.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<H3>H3</H3>).toJSON();
	expect(tree).toMatchSnapshot();
});
