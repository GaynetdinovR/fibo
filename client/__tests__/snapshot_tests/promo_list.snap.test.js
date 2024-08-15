import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import PromoList from "../../src/components/PromoList/PromoList.jsx";

const promos = [
	{ img_url: "./content/promo_banner_1.jpg", text: "some promo text", title: "some promo title" },
	{ img_url: "./content/promo_banner_1.jpg", text: "some promo text", title: "some promo title" },
	{ img_url: "./content/promo_banner_1.jpg", text: "some promo text", title: "some promo title" }
];

it("renders correctly", () => {
	const tree = renderer.create(<PromoList promos={promos} />).toJSON();
	expect(tree).toMatchSnapshot();
});
