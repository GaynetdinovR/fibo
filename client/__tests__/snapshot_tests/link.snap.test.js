import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Link from "../../src/ui/Link.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<Link>Link</Link>).toJSON();
	expect(tree).toMatchSnapshot();
});
