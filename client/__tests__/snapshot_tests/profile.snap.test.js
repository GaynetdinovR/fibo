import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";

import Profile from "../../src/components/Profile/Profile.jsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "../../src/store/store.js";
import router from "../../src/router/router.js";

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<RouterProvider router={router}>
					<Profile />
				</RouterProvider>
			</Provider>
		).toJSON();
	expect(tree).toMatchSnapshot();
});
