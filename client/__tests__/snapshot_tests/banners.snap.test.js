import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Banners from "../../src/components/Banners/Banners.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Banners/>).toJSON();
	expect(tree).toMatchSnapshot();
});
