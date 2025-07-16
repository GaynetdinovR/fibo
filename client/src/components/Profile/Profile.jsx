import styles from "../../styles/components/Profile.module.sass";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import H3 from "../../ui/H3.jsx";
import Button from "../../ui/Button.jsx";

import NameInput from "./components/NameInput.jsx";
import PhoneInput from "./components/PhoneInput.jsx";
import AddressInputWrap from "./components/AddressInputWrap.jsx";
import Bonuses from "./components/Bonuses.jsx";

import { logout } from "../../store/userSlice/userSlice.js";
import { useState } from "react";
import { formatPhoneFromInternational } from "../../scripts/functions.js";
import { updateUserDataByPhone } from "../../scripts/api.js";
import CodeInput from "./components/CodeInput.jsx";

const Profile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((state) => state.user);
	const [isShowCodeInput, setShowCodeInput] = useState(false);
	const [phone, setPhone] = useState("");

	/**
	 * Действия после нажатия кнопки "Выйти"
	 */
	const logoutClicked = () => {
		dispatch(logout());
		navigate("/");
	};

	/**
	 * Изменяет номер телефона в БД
	 * @returns {Promise<void>}
	 */
	const changePhone = async () => {
		const formattedPhone = formatPhoneFromInternational(phone);

		dispatch(setPhone(formattedPhone));

		await updateUserDataByPhone(user.phone, { phone: phone });
	};

	return (
		<section className={styles.profile}>

			<Bonuses bonuses={user.bonuses} />

			<div className={styles.profile__user_data}>
				<H3 className={styles.profile__title}>Личные данные</H3>

				<NameInput userData={{ phone: user.phone, name: user.name }} />

				<PhoneInput
					userData={{ phone: user.phone }}
					phoneInputData={{
						phone: phone,
						setPhone: setPhone
					}}
					codeInputData={{
						isShowCodeInput: isShowCodeInput,
						setShowCodeInput: setShowCodeInput
					}}
				/>

				{isShowCodeInput ? (
					<CodeInput
						changePhone={changePhone}
						phone={phone}
						setShowCodeInput={setShowCodeInput}
					/>) : null}

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
					onClickFn={logoutClicked}
					className={styles.profile__user_data_log_out_btn}
				>
					Выйти
				</Button>
			</div>
		</section>
	);
};

export default Profile;
