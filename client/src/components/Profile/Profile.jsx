import styles from "../../styles/components/Profile.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import H3 from "../../ui/H3.jsx";
import Button from "../../ui/Button.jsx";
import NameInput from "./components/NameInput.jsx";
import AddressInputWrap from "./components/AddressInputWrap.jsx";
import Bonuses from "./components/Bonuses.jsx";
import { logout } from "../../store/userSlice/userSlice.js";
import PhoneEditSection from "./components/PhoneEditSection.jsx";

const Profile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	/**
	 * Обработчик кнопки "Выйти"
	 */
	const handleLogout = () => {
		dispatch(logout());
		navigate("/");
	};

	return (
		<section className={styles.profile}>
			<Bonuses bonuses={user.bonuses} />

			<div className={styles.profile__user_data}>
				<H3 className={styles.profile__title}>Личные данные</H3>

				<NameInput userData={{ phone: user.phone, name: user.name }} />

				<PhoneEditSection user={user} />

				<AddressInputWrap
					userData={{ phone: user.phone, address: user.address }}
				/>

				<div className={styles.profile__input_checkbox}>
					<input type="checkbox" />
					<span className={styles.profile__input_span}>
						Сообщать о бонусах, акциях и новых продуктах
					</span>
				</div>

				<Button
					onClickFn={handleLogout}
					className={styles.profile__user_data_log_out_btn}
				>
					Выйти
				</Button>
			</div>
		</section>
	);
};

export default Profile;
