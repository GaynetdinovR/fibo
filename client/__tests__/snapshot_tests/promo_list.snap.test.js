import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import PromoList from "../../src/components/PromoList/PromoList.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<PromoList />).toJSON();
	expect(tree).toMatchSnapshot();
});
