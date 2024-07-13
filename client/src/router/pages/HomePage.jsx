import { useEffect, useState } from "react";
import Banners from "../../components/Banners/Banners.jsx";
import Products from "../../components/Products/Products.jsx";

const Home = () => {
	const [databaseData, setDatabaseData] = useState(null);

	const callBackendAPI = async () => {
		const response = await fetch("/products");
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}

		return body;
	};

	useEffect(() => {
		callBackendAPI()
			.then(res => setDatabaseData(res))
			.catch(err => console.log(err));
	}, []);

	return (
		<main>
			<Products products={databaseData} />
		</main>
	);
};
export default Home;