import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";

import AuthModal from "../../src/components/AuthModal/AuthModal.jsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import store from "../../src/store/store.js";
import router from "../../src/router/router.js";

let state = true;
const set = (val) => {
	state = val;
};

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<RouterProvider router={router}>
					<AuthModal isOpen={state} setOpen={set} />
				</RouterProvider>
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
