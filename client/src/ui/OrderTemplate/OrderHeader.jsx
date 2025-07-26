import styles from "../../styles/components/OrderTemplate.module.sass";
import Logo from "../Logo.jsx";
import classNames from "classnames";

const OrderHeader = ({ status }) => {
	const cartClass = classNames(
		styles.order_header__status_step,
		status === "cart" && styles.active
	);

	const registrationClass = classNames(
		styles.order_header__status_step,
		status === "registration" && styles.active
	);

	const doneClass = classNames(
		styles.order_header__status_step,
		status === "done" && styles.active
	);

	return (
		<header className={styles.order_header}>
			<Logo className={styles.order_header__logo} />

			<div className={styles.order_header__status}>
				<div className={cartClass}>
					<div className={styles.order_header__status_circle}>
						<span className={styles.order_header__status_circle_num}>1</span>
					</div>
					<span className={styles.order_header__status_name}>Корзина</span>
				</div>

				<div className={registrationClass}>
					<div className={styles.order_header__status_circle}>
						<span className={styles.order_header__status_circle_num}>2</span>
					</div>
					<span className={styles.order_header__status_name}>Оформление</span>
				</div>

				<div className={doneClass}>
					<div className={styles.order_header__status_circle}>
						<span className={styles.order_header__status_circle_num}>3</span>
					</div>
					<span className={styles.order_header__status_name}>Заказ принят</span>
				</div>
			</div>
		</header>
	);
};

export default OrderHeader;