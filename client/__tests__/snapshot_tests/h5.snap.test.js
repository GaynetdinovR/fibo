import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import H5 from "../../src/ui/H5.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<H5>H5</H5>).toJSON();
	expect(tree).toMatchSnapshot();
});
