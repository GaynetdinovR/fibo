import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Logo from "../../src/ui/Logo.jsx";
import router from "../../src/router/router.js";
import { RouterProvider } from "react-router-dom";

it("renders correctly", () => {
	const tree = renderer.create(<RouterProvider router={router}><Logo /></RouterProvider>).toJSON();
	expect(tree).toMatchSnapshot();
});
