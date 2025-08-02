import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Text from "../../src/ui/TextElements/Text.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Text>Text</Text>).toJSON();
	expect(tree).toMatchSnapshot();
});
