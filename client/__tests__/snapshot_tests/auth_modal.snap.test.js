import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import AuthModal from "../../src/components/AuthModal/AuthModal.jsx";
import { Provider } from "react-redux";
import store from "../../src/store/store.js";

let state = true;
const set = (val) => {
	state = val;
};

it("renders correctly", () => {
	const tree = renderer
		.create(
			<Provider store={store}>
				<AuthModal isOpen={state} setOpen={set} />
			</Provider>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
