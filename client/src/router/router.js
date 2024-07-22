import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Template from "../ui/Template.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Template>
				<HomePage />
			</Template>
		)
	},
	{
		path: "contacts",
		element: (
			<Template>
				<ContactsPage />
			</Template>
		)
	},
	{
		path: "promo",
		element: (
			<Template>
				<main />
			</Template>
		)
	}
]);

export default router;
