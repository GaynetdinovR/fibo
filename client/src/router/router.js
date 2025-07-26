import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Template from "../ui/Template.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import PromoPage from "./pages/PromoPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import OrderTemplate from "../ui/OrderTemplate/OrderTemplate.jsx";

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
				<PromoPage />
			</Template>
		)
	},
	{
		path: "profile",
		element: (
			<Template>
				<ProfilePage />
			</Template>
		)
	},
	{
		path: "cart",
		element: (
			<OrderTemplate status={"cart"}>
				<CartPage />
			</OrderTemplate>
		)
	}
]);

export default router;
