import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import ButtonToTop from "../../src/components/OtherComponents/ButtonToTop.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<ButtonToTop />).toJSON();
	expect(tree).toMatchSnapshot();
});
