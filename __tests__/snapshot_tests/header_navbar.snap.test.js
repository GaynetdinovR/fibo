import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import HeaderNavBar from "../../src/components/Header/components/HeaderNavBar.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<HeaderNavBar />).toJSON();
	expect(tree).toMatchSnapshot();
});
