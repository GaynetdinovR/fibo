import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Button from "../../src/ui/Button.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Button>Button</Button>).toJSON();
	expect(tree).toMatchSnapshot();
});
