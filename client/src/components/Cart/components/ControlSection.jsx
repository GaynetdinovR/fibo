import styles from "../../../styles/components/Cart.module.sass";
import Sum from "./Sum.jsx";
import PromoCode from "../../../ui/Inputs/PromoCode.jsx";
import RouterLink from "../../../ui/TextElements/RouterLink.jsx";
import Button from "../../../ui/Buttons/Button.jsx";
import { useNavigate } from "react-router-dom";
import ControlBtns from "../../../ui/Buttons/ControlBtns.jsx";

const ControlSection = ({ setTotalSum, totalSum }) => {
	const navigate = useNavigate();

	/**
	 * Обработчик кнопки "Продолжить оформление"
	 */
	const handleNextStepClick = () => {
		scroll(0, 0);
		navigate("/order");
	};

	const btnsData = {
		continueBtn: {
			text: "Продолжить оформление",
			onClickFn: handleNextStepClick
		},
		backBtn: {
			text: "Вернуться в магазин",
			to: "/"
		}
	};

	return (
		<div className={styles.cart__control}>
			<div className={styles.cart__control_top_side}>
				<PromoCode
					className={styles.cart__promocode}
					setTotalSum={setTotalSum}
				/>
				<Sum totalSum={totalSum} />
			</div>
			<ControlBtns
				className={styles.cart__control_bottom_side}
				btnsData={btnsData}
			/>
		</div>
	);
};

export default ControlSection;
