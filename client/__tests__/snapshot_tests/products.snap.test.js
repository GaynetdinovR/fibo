import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Products from "../../src/components/Products/Products.jsx";

const products = [
	{
		name: "test",
		desciption: "test",
		price: 299.99,
		is_new: true,
		img_url: "./content/pizzas/pizza_1.png",
		type: "pizza"
	},
	{
		name: "test",
		desciption: "test",
		price: 455.99,
		is_new: true,
		img_url: "./content/pastas/pasta_1.png",
		type: "pasta"
	},
];

it("renders correctly", () => {
	const tree = renderer.create(<Products products={products} />).toJSON();
	expect(tree).toMatchSnapshot();
});
