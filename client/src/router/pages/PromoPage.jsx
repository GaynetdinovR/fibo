import PromoList from "../../components/PromoList/PromoList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPromosFromDB } from "../../scripts/api.js";
import { setPromosFromDB } from "../../store/promosSlice/promosSlice.js";

const ContactsPage = () => {
	const promos = useSelector((state) => state.promos);

	const dispatch = useDispatch();

	useEffect(() => {
		getPromosFromDB()
			.then((res) => dispatch(setPromosFromDB(res)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<PromoList promos={promos} />
		</main>
	);
};
export default ContactsPage;
