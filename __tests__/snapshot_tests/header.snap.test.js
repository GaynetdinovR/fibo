import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import Header from "../../src/components/Header/Header.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Header />).toJSON();
	expect(tree).toMatchSnapshot();
});
