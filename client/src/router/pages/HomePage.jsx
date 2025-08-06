import { useContext, useEffect, useMemo, useState } from "react";

import Banners from "../../components/Banners/Banners.jsx";
import Products from "../../components/Products/Products.jsx";
import NewProducts from "../../components/NewProducts/NewProducts.jsx";
import OurPromo from "../../components/OurPromo/OurPromo.jsx";
import PaymentAndDelivery from "../../components/PaymentAndDelivery/PaymentAndDelivery.jsx";
import ButtonToTop from "../../components/OtherComponents/ButtonToTop.jsx";
import ProductCardModal from "../../components/ProductCardModal/ProductCardModal.jsx";

import {
	getRandom4NewProducts,
	filterProductsByType
} from "../../utils/index.js";
import { getProductsFromDB } from "../../utils/api.js";

import { useDispatch, useSelector } from "react-redux";
import { setProductsFromDB } from "../../store/productsSlice/productsSlice.js";
import { NotificationManager } from "react-notifications";
import { useLocation } from "react-router-dom";
import { ModalContext } from "../../ui/Providers/ModalProvider.jsx";

const Home = () => {
	const { isProductCardOpen } = useContext(ModalContext);
	const products = useSelector((state) => state.products);
	const [chosenProduct, setChosenProduct] = useState(null);

	const dispatch = useDispatch();
	const location = useLocation();

	const newProducts = useMemo(
		() => getRandom4NewProducts(products),
		[products]
	);
	const supplements = useMemo(
		() => filterProductsByType(products, "supplement"),
		[products]
	);

	useEffect(() => {
		if (location.state?.showOrderSuccess) {
			NotificationManager.success("Заказ успешно оформлен");
			window.history.replaceState({}, "");
		}
	}, [location.state]);

	useEffect(() => {
		getProductsFromDB()
			.then((res) => dispatch(setProductsFromDB(res)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<>
			<ButtonToTop />
			<Banners />
			<NewProducts
				chooseProduct={setChosenProduct}
				newProducts={newProducts}
			/>
			<Products products={products} chooseProduct={setChosenProduct} />
			<OurPromo />
			<PaymentAndDelivery />
			{isProductCardOpen && (
				<ProductCardModal
					supplementsData={supplements}
					product={chosenProduct}
				/>
			)}
		</>
	);
};
export default Home;
