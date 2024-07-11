import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import FooterContacts from "../../src/components/Footer/components/FooterContacts.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<FooterContacts />).toJSON();
	expect(tree).toMatchSnapshot();
});
