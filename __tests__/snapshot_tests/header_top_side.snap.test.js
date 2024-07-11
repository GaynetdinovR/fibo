import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import HeaderTopSide from "../../src/components/Header/components/HeaderTopSide.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<HeaderTopSide />).toJSON();
	expect(tree).toMatchSnapshot();
});
