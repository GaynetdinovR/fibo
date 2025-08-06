import styles from "../../styles/components/AddressModal.module.sass";

import { memo, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../../ui/Providers/ModalProvider.jsx";
import { setAddress } from "../../store/userSlice/userSlice.js";
import { updateUserAddress } from "../../utils/index.js";

import Modal from "../../ui/Templates/Modal.jsx";
import H3 from "../../ui/Titles/H3.jsx";
import AddressInput from "../../ui/Inputs/AddressInput.jsx";
import Button from "../../ui/Buttons/Button.jsx";
import DeliveryType from "./components/DeliveryType.jsx";

export const DELIVERY_TYPES = {
	DELIVERY: "delivery",
	SELF_PICKUP: "self_pickup"
};

const INITIAL_ADDRESS_STATE = {
	address: "",
	entrance: "",
	floor: "",
	intercome_code: "",
	apartment: ""
};

const AddressModal = ({ isCanChoose = false }) => {
	const { setAddressOpen, isAddressOpen } = useContext(ModalContext);
	const [setOpen, isOpen] = [setAddressOpen, isAddressOpen];

	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [deliveryType, setDeliveryType] = useState(DELIVERY_TYPES.DELIVERY);
	const [addressData, setAddressDataLocal] = useState(INITIAL_ADDRESS_STATE);

	/**
	 * Обработчик изменения типа доставки
	 * @param type
	 */
	const handleDeliveryTypeChange = (type) => {
		setDeliveryType(type);
	};

	/**
	 * Сбрасывает данные формы
	 */
	const resetAddressForm = () => {
		setAddressDataLocal(INITIAL_ADDRESS_STATE);
	};

	/**
	 * Обновляет адрес пользователя и очищает форму
	 */
	const updateUserAddressAndClose = async () => {
		console.log(addressData);

		if (!isCanChoose && deliveryType === DELIVERY_TYPES.DELIVERY) {
			const setAddressToStore = (val) => dispatch(setAddress(val));
			await updateUserAddress(user.phone, addressData, setAddressToStore);
			resetAddressForm();
		}

		setOpen(false);
	};

	return (
		<Modal
			className={styles.address_modal}
			isOpen={isOpen}
			setOpen={setOpen}
		>
			<div className={styles.address_modal__content}>
				<H3 className={styles.address_modal__title}>Куда доставить?</H3>

				{isCanChoose && (
					<DeliveryType
						handleDeliveryTypeChange={handleDeliveryTypeChange}
						deliveryType={deliveryType}
					/>
				)}

				<AddressInput
					isDisabled={false}
					data={addressData}
					setData={setAddressDataLocal}
				/>

				<Button
					className={styles.address_modal__bottom_btn}
					onClickFn={updateUserAddressAndClose}
					isDisabled={deliveryType === DELIVERY_TYPES.DELIVERY && !addressData.address}
				>
					Подтвердить {deliveryType === DELIVERY_TYPES.DELIVERY && "адрес"}
				</Button>
			</div>
		</Modal>
	);
};

export default memo(AddressModal);
