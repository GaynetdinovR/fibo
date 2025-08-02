import styles from "../../styles/components/Profile.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import H3 from "../../ui/Titles/H3.jsx";
import Button from "../../ui/Buttons/Button.jsx";
import NameInput from "../../ui/Inputs/NameInput.jsx";
import AddressInputWrap from "../../ui/Inputs/AddressInputWrap.jsx";
import Bonuses from "./components/Bonuses.jsx";
import { logout } from "../../store/userSlice/userSlice.js";
import PhoneEditSection from "../../ui/Other/PhoneEditSection/PhoneEditSection.jsx";
import BonusesCheckbox from "../../ui/Inputs/Checkbox.jsx";
import Checkbox from "../../ui/Inputs/Checkbox.jsx";
import { useState } from "react";

const Profile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const [isBonusesCheckboxChecked, setBonusesCheckbox] = useState(false);

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

				<NameInput
					userData={{ phone: user.phone, name: user.name }}
					className={styles.profile__name_input}
				/>

				<PhoneEditSection
					user={user}
					inputClassNames={{
						phoneInput: styles.profile__phone_input,
						codeInput: styles.profile__code_input
					}}
				/>

				<AddressInputWrap
					userData={{ phone: user.phone, address: user.address }}
					className={styles.profile__address_input}
				/>


				<Checkbox
					className={styles.profile__checkbox}
					text={"Сообщать о бонусах, акциях и новых продуктах"}
					checkBoxData={{
						isChecked: isBonusesCheckboxChecked,
						setChecked: setBonusesCheckbox
					}}
				/>

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
