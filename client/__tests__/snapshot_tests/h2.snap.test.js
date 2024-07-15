import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import H2 from "../../src/ui/H2.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<H2>H2</H2>).toJSON();
	expect(tree).toMatchSnapshot();
});
