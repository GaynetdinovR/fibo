import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Logo from "../../src/ui/Logo.jsx";
import router from "../../src/router/router.js";
import { RouterProvider } from "react-router-dom";
import store from "../../src/store/store.js";
import { Provider } from "react-redux";

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<RouterProvider router={router}>
					<Logo />
				</RouterProvider>
			</Provider>
		).toJSON();
	expect(tree).toMatchSnapshot();
});
