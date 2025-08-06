import Cart from "../../components/Cart/Cart.jsx";
import { useEffect } from "react";
import { getProductsFromDB } from "../../utils/index.js";
import { setProductsFromDB } from "../../store/productsSlice/productsSlice.js";
import { useDispatch } from "react-redux";

const CartPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		getProductsFromDB()
			.then((res) => dispatch(setProductsFromDB(res)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<Cart/>
	);
};
export default CartPage;
