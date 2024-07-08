import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Template from "../components/Template";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Template>
				<HomePage />
			</Template>
		)
	}
]);

export default router;
