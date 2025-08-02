import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Template from "../ui/Templates/Template.jsx";
import ContactsPage from "./pages/ContactsPage.jsx";
import PromoPage from "./pages/PromoPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import OrderTemplate from "../ui/Templates/OrderTemplate/OrderTemplate.jsx";
import OrderPage from "./pages/OrderPage.jsx";

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
	},
	{
		path: "order",
		element: (
			<OrderTemplate status={"registration"}>
				<OrderPage />
			</OrderTemplate>
		)
	}
]);

export default router;
