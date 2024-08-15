import styles from "../../styles/components/Profile.module.sass";
import classNames from "classnames";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/userSlice/userSlice.js";

import DashedLink from "../../ui/DashedLink.jsx";
import H3 from "../../ui/H3.jsx";
import Button from "../../ui/Button.jsx";

import NameInput from "./components/NameInput.jsx";
import PhoneInput from "./components/PhoneInput.jsx";
import CodeInput from "./components/CodeInput.jsx";
import AddressInput from "./components/AddressInput.jsx";
import Bonus from "./components/Bonus.jsx";
import DefaultBonus from "./components/DefaultBonus.jsx";

import { formatPhone } from "../../scripts/functions.js";
import { updateUserDataByPhone } from "../../scripts/api.js";

const Profile = () => {
	const user = useSelector((state) => state.user);

	const [phoneNumberInputVal, setPhoneNumber] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	/**
	 * Действия после нажатия кнопки "Выйти"
	 */
	const logoutClicked = () => {
		dispatch(logout());
		window.scrollTo(0, 0);
		navigate("/");
	};

	/**
	 * Изменяет номер телефона в БД
	 * @returns {Promise<void>}
	 */
	const changePhone = async () => {
		const phone = formatPhone(phoneNumberInputVal);

		await updateUserDataByPhone(user.phone, { phone: phone });
	};

	/**
	 * Изменяет имя в БД
	 * @param name string
	 * @returns {Promise<void>}
	 */
	const changeName = async (name) => {
		await updateUserDataByPhone(user.phone, { name: name });
	};

	return (
		<section className={styles.profile}>
			<div className={styles.profile__bonuses}>
				<div className={styles.profile__bonuses_wrap}>
					<H3 className={styles.profile__title}>Мои бонусы</H3>

					<div className={styles.profile__bonuses_list}>
						{user.bonuses?.map((bonus, i) => (
							<Bonus key={i} bonus={bonus} />
						))}
						{user.bonuses ? null : <DefaultBonus />}
					</div>

					<DashedLink
						onClickFn={() => navigate("/promo")}
						className={styles.profile__bonuses_link}
					>
						Все наши акции
					</DashedLink>
				</div>
			</div>

			<div className={styles.profile__user_data}>
				<H3 className={styles.profile__title}>Личные данные</H3>

				<NameInput changeName={changeName} />

				<PhoneInput
					phoneNumber={phoneNumberInputVal}
					setPhoneNumber={setPhoneNumber}
				/>

				{phoneNumberInputVal.length === 16 ? (
					<CodeInput changePhone={changePhone} />
				) : null}

				<div
					className={classNames(
						styles.profile__input_wrap,
						styles.profile__address_wrap
					)}
				>
					<label className={styles.profile__input_label}>
						<span className={styles.profile__input_span}>
							Адрес
						</span>
						<AddressInput />
					</label>

					<DashedLink
						onClickFn={() => {}}
						className={styles.profile__address_link}
					>
						Изменить
					</DashedLink>
				</div>

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