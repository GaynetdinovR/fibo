import { useEffect, useMemo, useState } from "react";

import Banners from "../../components/Banners/Banners.jsx";
import Products from "../../components/Products/Products.jsx";
import NewProducts from "../../components/NewProducts/NewProducts.jsx";
import OurPromo from "../../components/OurPromo/OurPromo.jsx";
import PaymentAndDelivery from "../../components/PaymentAndDelivery/PaymentAndDelivery.jsx";
import ButtonToTop from "../../components/OtherComponents/ButtonToTop.jsx";

import {
	getRandom4NewProducts,
	filterProductsByType
} from "../../utils/functions.js";
import { getProductsFromDB } from "../../utils/api.js";

import { useDispatch, useSelector } from "react-redux";
import { setProductsFromDB } from "../../store/productsSlice/productsSlice.js";
import ProductCardModal from "../../components/ProductCardModal/ProductCardModal.jsx";

const Home = () => {
	const products = useSelector((state) => state.products);
	const [chosenProduct, setChosenProduct] = useState(null);

	const dispatch = useDispatch();

	const newProducts = useMemo(() => {
		return getRandom4NewProducts(products);
	}, [products]);

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
			<ProductCardModal
				supplementsData={filterProductsByType(products, "supplement")}
				product={chosenProduct}
			/>
		</>
	);
};
export default Home;
