import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import NewProducts from "../../src/components/NewProducts/NewProducts.jsx";

const products = [
	{
		name: "test",
		price: 299.99,
		img_url: "./content/pizzas/pizza_1.png",
		type: "pizza"
	},
	{
		name: "test",
		price: 455.99,
		img_url: "./content/pastas/pasta_1.png",
		type: "pasta"
	},
	{
		name: "test",
		price: 322.99,
		img_url: "./content/soups/soup_1.png",
		type: "soup"
	},
	{
		name: "test",
		price: 553.99,
		img_url: "./content/snacks/snack_1.png",
		type: "snack"
	}
];

it("renders correctly", () => {
	const tree = renderer.create(<NewProducts newProducts={products} />).toJSON();
	expect(tree).toMatchSnapshot();
});
