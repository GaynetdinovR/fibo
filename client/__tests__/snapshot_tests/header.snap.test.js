import renderer from "react-test-renderer";
import { expect, it } from "@jest/globals";
import Header from "../../src/components/Header/Header.jsx";
import { RouterProvider } from "react-router-dom";
import router from "../../src/router/router.js";
import { Provider } from "react-redux";
import store from "../../src/store/store.js";

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<RouterProvider router={router}>
					<Header />
				</RouterProvider>
			</Provider>
		).toJSON();
	expect(tree).toMatchSnapshot();
});
