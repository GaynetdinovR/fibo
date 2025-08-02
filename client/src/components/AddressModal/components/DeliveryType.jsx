import styles from "../../../styles/components/AddressModal.module.sass";
import Button from "../../../ui/Buttons/Button.jsx";
import { DELIVERY_TYPES } from "../AddressModal.jsx";

const DeliveryType = ({ handleDeliveryTypeChange, deliveryType }) => {
	return (
		<div className={styles.address_modal__top_side}>
			<Button
				className={styles.address_modal__top_btn}
				onClickFn={() => handleDeliveryTypeChange(DELIVERY_TYPES.DELIVERY)}
				isDisabled={deliveryType === DELIVERY_TYPES.DELIVERY}
			>
				Доставка
			</Button>

			<Button
				className={styles.address_modal__top_btn}
				onClickFn={() => handleDeliveryTypeChange(DELIVERY_TYPES.SELF_PICKUP)}
				isDisabled={deliveryType === DELIVERY_TYPES.SELF_PICKUP}
			>
				Самовывоз
			</Button>
		</div>
	);
};

export default DeliveryType;