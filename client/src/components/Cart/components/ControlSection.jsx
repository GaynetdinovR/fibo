import styles from "../../../styles/components/Cart.module.sass";
import Sum from "./Sum.jsx";
import PromoCode from "./PromoCode.jsx";
import RouterLink from "../../../ui/RouterLink.jsx";
import Button from "../../../ui/Button.jsx";
import { useNavigate } from "react-router-dom";

const ControlSection = ({ setTotalSum, totalSum }) => {
	const navigate = useNavigate();
	const handleNextStepClick = () => navigate("/order");

	return (
		<div className={styles.cart__control}>
			<div className={styles.cart__control_top_side}>
				<PromoCode setTotalSum={setTotalSum} />
				<Sum totalSum={totalSum} />
			</div>
			<div className={styles.cart__control_bottom_side}>
				<RouterLink
					to={"/"}
					className={styles.cart__control_back_to_shop}
				>
					Вернуться в магазин
				</RouterLink>
				<Button
					onClickFn={handleNextStepClick}
					className={styles.cart__control_next_step}
				>
					Продолжить оформление
				</Button>
			</div>
		</div>
	);
};

export default ControlSection;
