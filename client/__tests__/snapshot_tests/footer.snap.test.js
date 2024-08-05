import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import Footer from "../../src/components/Footer/Footer.jsx";
import { RouterProvider } from "react-router-dom";
import router from "../../src/router/router.js";

it("renders correctly", () => {
	const tree = renderer.create(<RouterProvider router={router}><Footer /></RouterProvider>).toJSON();
	expect(tree).toMatchSnapshot();
});
