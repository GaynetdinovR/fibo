import styles from "../../styles/components/AddressModal.module.sass";

import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { setAddressData } from "../../store/userSlice/userSlice.js";
import { updateUserAddress } from "../../utils/functions.js";

import Modal from "../../ui/Modal.jsx";
import H3 from "../../ui/H3.jsx";
import AddressInput from "../../ui/AddressInput.jsx";
import Button from "../../ui/Button.jsx";
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
	const { setAddress, isAddressOpen } = useContext(ModalContext);
	const [setOpen, isOpen] = [setAddress, isAddressOpen];

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
		const setAddressToStore = (val) => dispatch(setAddressData(val));
		await updateUserAddress(user.phone, addressData, setAddressToStore);

		setOpen(false);
		resetAddressForm();
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
					isDisabled={deliveryType === DELIVERY_TYPES.SELF_PICKUP}
					data={addressData}
					setData={setAddressDataLocal}
				/>

				<Button
					className={styles.address_modal__bottom_btn}
					onClickFn={updateUserAddressAndClose}
					isDisabled={deliveryType === DELIVERY_TYPES.DELIVERY && !addressData.address}
				>
					Подтвердить {deliveryType === DELIVERY_TYPES.DELIVERY && 'адрес'}
				</Button>
			</div>
		</Modal>
	);
};

export default AddressModal;
