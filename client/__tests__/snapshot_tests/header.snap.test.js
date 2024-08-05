import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import Header from "../../src/components/Header/Header.jsx";
import { RouterProvider } from "react-router-dom";
import router from "../../src/router/router.js";

it("renders correctly", () => {
	const tree = renderer.create(<RouterProvider router={router}><Header /></RouterProvider>).toJSON();
	expect(tree).toMatchSnapshot();
});
