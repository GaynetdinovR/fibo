import styles from "../../styles/components/Profile.module.sass";
import classNames from "classnames";

import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, setName, setPhone } from "../../store/userSlice/userSlice.js";

import DashedLink from "../../ui/DashedLink.jsx";
import H3 from "../../ui/H3.jsx";
import Button from "../../ui/Button.jsx";

import NameInput from "./components/NameInput.jsx";
import PhoneInput from "./components/PhoneInput.jsx";
import CodeInput from "./components/CodeInput.jsx";
import AddressInput from "../../ui/AddressInput.jsx";
import Bonus from "./components/Bonus.jsx";
import DefaultBonus from "./components/DefaultBonus.jsx";

import { formatPhoneFromInternational, updateUserAddress } from "../../scripts/functions.js";
import { updateUserDataByPhone } from "../../scripts/api.js";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { setAddressData } from "../../store/userSlice/userSlice.js";

const Profile = () => {
	const user = useSelector((state) => state.user);

	const [phoneNumberInputVal, setPhoneNumber] = useState("");
	const [isShowCodeInput, setShowCodeInput] = useState(false);
	const [isAddressDisabled, setDisabledAddress] = useState(true);
	const [addressData, setAddressDataLocal] = useState({
		address: "",
		entrance: "",
		floor: "",
		intercome_code: "",
		apartment: ""
	});

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
		const phone = formatPhoneFromInternational(phoneNumberInputVal);

		dispatch(setPhone(phone));

		await updateUserDataByPhone(user.phone, { phone: phone });
	};

	/**
	 * Изменяет имя в БД
	 * @param name string
	 * @returns {Promise<void>}
	 */
	const changeName = async (name) => {
		dispatch(setName(name));
		await updateUserDataByPhone(user.phone, { name: name });
	};

	/**
	 * Оболочка для обновления адреса пользователя
	 */
	const updateUserAddressWrapProfile = async () => {
		if (!isAddressDisabled) {
			const setAddressToStore = (val) => dispatch(setAddressData(val));

			await updateUserAddress(user.phone, addressData, setAddressToStore);
		}

		setDisabledAddress(!isAddressDisabled);
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

				<NameInput user={user} changeName={changeName} />

				<PhoneInput
					user={user}
					phoneNumber={phoneNumberInputVal}
					setPhoneNumber={setPhoneNumber}
					setShowCodeInput={setShowCodeInput}
				/>

				{isShowCodeInput ? (
					<CodeInput
						setShowCodeInput={setShowCodeInput}
						changePhone={changePhone}
					/>
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
						<AddressInput data={addressData} setData={setAddressDataLocal} isDisabled={isAddressDisabled} />
					</label>

					<DashedLink
						onClickFn={updateUserAddressWrapProfile}
						className={styles.profile__address_link}
					>
						{isAddressDisabled ? "Изменить" : "Сохранить"}
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