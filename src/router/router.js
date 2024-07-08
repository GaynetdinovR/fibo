import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Template from "../components/Template.jsx";

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
