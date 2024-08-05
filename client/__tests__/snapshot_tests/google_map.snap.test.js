import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import GoogleMap from "../../src/ui/GoogleMap.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<GoogleMap/>).toJSON();
	expect(tree).toMatchSnapshot();
});
