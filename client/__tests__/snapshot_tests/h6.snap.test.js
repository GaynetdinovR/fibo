import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import H6 from "../../src/ui/H6.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<H6>H6</H6>).toJSON();
	expect(tree).toMatchSnapshot();
});
