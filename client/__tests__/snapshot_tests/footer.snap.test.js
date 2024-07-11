import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import Footer from "../../src/components/Footer/Footer.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Footer />).toJSON();
	expect(tree).toMatchSnapshot();
});
