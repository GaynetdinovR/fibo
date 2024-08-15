import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserByPhoneFromDB } from "../../scripts/api.js";
import { setUserData } from "../../store/userSlice/userSlice.js";
import Profile from "../../components/Profile/Profile.jsx";

const ProfilePage = () => {
	const user = useSelector((state) => state.user);

	const dispatch = useDispatch();

	useEffect(() => {
		getUserByPhoneFromDB(user.phone)
			.then((res) => dispatch(setUserData(res)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<Profile />
		</main>
	);
};
export default ProfilePage;
