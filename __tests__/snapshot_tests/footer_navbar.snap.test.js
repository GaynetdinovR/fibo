import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import FooterNavBar from "../../src/components/Footer/components/FooterNavBar.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<FooterNavBar />).toJSON();
	expect(tree).toMatchSnapshot();
});
