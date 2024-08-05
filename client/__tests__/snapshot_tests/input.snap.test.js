import renderer from "react-test-renderer";
import { it, expect } from "@jest/globals";
import Input from "../../src/ui/Input.jsx";

it("renders correctly", () => {
	const tree = renderer
		.create(
			<>
				<Input mask={"9"} placeholder={"9"} errorInfo={{isErrored: false}}/>
				<Input mask={"9"} placeholder={"9"} errorInfo={{error: 'Errored', isErrored: true}}/>
				<Input mask={"9"} placeholder={"9"} errorInfo={{isErrored: false}} isDisabled={true}/>
				<Input mask={"9"} placeholder={"9"} errorInfo={{error: 'Errored', isErrored: true}} isDisabled={true}/>
			</>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
