import { useEffect, useState } from "react";

import Banners from "../../components/Banners/Banners.jsx";
import Products from "../../components/Products/Products.jsx";
import NewProducts from "../../components/NewProducts/NewProducts.jsx";
import OurPromo from "../../components/OurPromo/OurPromo.jsx";

import { getProductsFromDB, getRandom4NewProducts } from "../../scripts/functions.js";

const Home = () => {
	const [products, setProducts] = useState(null);

	useEffect(() => {
		getProductsFromDB()
			.then((res) => setProducts(res))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<Banners />
			<NewProducts newProducts={getRandom4NewProducts(products)} />
			<Products products={products} />
			<OurPromo />
		</main>
	);
};
export default Home;
