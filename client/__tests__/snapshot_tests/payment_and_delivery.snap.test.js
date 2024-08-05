import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import PaymentAndDelivery from "../../src/components/PaymentAndDelivery/PaymentAndDelivery.jsx";

it("renders correctly", () => {
	const tree = renderer.create(<PaymentAndDelivery/>).toJSON();
	expect(tree).toMatchSnapshot();
});
