import styles from "../../styles/components/AddressModal.module.sass";
import Modal from "../../ui/Modal.jsx";
import H3 from "../../ui/H3.jsx";
import AddressInput from "../../ui/AddressInput.jsx";
import Button from "../../ui/Button.jsx";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalContext } from "../../ui/ModalProvider.jsx";
import { setAddressData } from "../../store/userSlice/userSlice.js";
import { updateUserAddress } from "../../scripts/functions.js";

const AddressModal = ({ isCanChoose = false }) => {
	const { setAddress, isAddressOpen } = useContext(ModalContext);
	const [setOpen, isOpen] = [setAddress, isAddressOpen];

	const user = useSelector(state => state.user);
	const dispatch = useDispatch();

	const [isDeliveryBtnDisabled, setDeliveryBtnDisabled] = useState(true);
	const [isSelfPickupBtnDisabled, setSelfPickupBtnDisabled] = useState(false);
	const [addressData, setAddressDataLocal] = useState({
		address: "",
		entrance: "",
		floor: "",
		intercome_code: "",
		apartment: ""
	});

	/**
	 * Оболочка для обновления адреса пользователя,
	 * также закрывает окно ввода адреса и очищает поля
	 */
	const updateUserAddressWrapModal = async () => {
		const setAddressToStore = (val) => dispatch(setAddressData(val));

		await updateUserAddress(user.phone, addressData, setAddressToStore);

		setOpen(false);

		setAddressDataLocal({
			address: "",
			entrance: "",
			floor: "",
			intercome_code: "",
			apartment: ""
		});
	}

	return (
		<Modal
			className={styles.address_modal}
			isOpen={isOpen}
			setOpen={setOpen}
		>
			<div className={styles.address_modal__content}>
				<H3 className={styles.address_modal__title}>Куда доставить?</H3>

				{isCanChoose ? (
					<div className={styles.address_modal__top_side}>
						<Button
							className={styles.address_modal__top_btn}
							onClickFn={() => {
								setDeliveryBtnDisabled(true);
								setSelfPickupBtnDisabled(false);
							}}
							isDisabled={isDeliveryBtnDisabled}
						>
							Доставка
						</Button>

						<Button
							className={styles.address_modal__top_btn}
							onClickFn={() => {
								setSelfPickupBtnDisabled(true);
								setDeliveryBtnDisabled(false);
							}}
							isDisabled={isSelfPickupBtnDisabled}
						>
							Самовывоз
						</Button>
					</div>
				) : null}

				<AddressInput
					isDisabled={false}
					data={addressData}
					setData={setAddressDataLocal}
				/>

				<Button
					className={styles.address_modal__bottom_btn}
					onClickFn={updateUserAddressWrapModal}
				>
					Подтвердить адрес
				</Button>
			</div>
		</Modal>
	);
};

export default AddressModal;
