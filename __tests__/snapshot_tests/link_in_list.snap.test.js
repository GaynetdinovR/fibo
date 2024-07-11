import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import LinkInList from "../../src/ui/LinkInList.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<LinkInList>LinkInList</LinkInList>).toJSON();
	expect(tree).toMatchSnapshot();
});
