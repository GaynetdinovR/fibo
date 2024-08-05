import { useEffect, useState } from "react";

import Banners from "../../components/Banners/Banners.jsx";
import Products from "../../components/Products/Products.jsx";
import NewProducts from "../../components/NewProducts/NewProducts.jsx";
import OurPromo from "../../components/OurPromo/OurPromo.jsx";
import PaymentAndDelivery from "../../components/PaymentAndDelivery/PaymentAndDelivery.jsx";
import ButtonToTop from "../../components/OtherComponents/ButtonToTop.jsx";

import { getRandom4NewProducts } from "../../scripts/functions.js";
import { getProductsFromDB } from "../../scripts/api.js";

import { useDispatch, useSelector } from "react-redux";
import { setProductsFromDB } from "../../store/productsSlice/productsSlice.js";

const Home = () => {
	const products = useSelector((state) => state.products);

	const dispatch = useDispatch();

	useEffect(() => {
		getProductsFromDB()
			.then((res) => dispatch(setProductsFromDB(res)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<ButtonToTop />
			<Banners />
			<NewProducts newProducts={getRandom4NewProducts(products)} />
			<Products products={products} />
			<OurPromo />
			<PaymentAndDelivery />
		</main>
	);
};
export default Home;
