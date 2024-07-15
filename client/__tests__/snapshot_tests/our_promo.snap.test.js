import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import OurPromo from "../../src/components/OurPromo/OurPromo.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<OurPromo/>).toJSON();
	expect(tree).toMatchSnapshot();
});
