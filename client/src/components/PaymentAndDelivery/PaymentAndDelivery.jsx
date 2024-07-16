import styles from "../../styles/components/PaymentAndDelivery.module.sass";
import GoogleMap from "./components/GoogleMap.jsx";
import H3 from "../../ui/H3.jsx";
import Text from "../../ui/Text.jsx";

const PaymentAndDelivery = () => {
	const benefits = [
		{ src: "./icons/shop.png", text: "Широкий выбор блюд" },
		{ src: "./icons/car_with_paper.png", text: "Полная информация о заказе" },
		{ src: "./icons/check.png", text: "Удобное составление и быстрое приготовление заказа" },
		{ src: "./icons/car_with_time.png", text: "Доставка в течении 1 часа" }
	];

	return (
		<section className={styles.payment_and_delivery}>
			<div className={styles.payment_and_delivery__inner}>
				<H3 className={styles.payment_and_delivery__title}>
					Оплата и доставка
				</H3>
				<div className={styles.payment_and_delivery__content}>
					{benefits.map((benefit, i) => (
						<div key={i} className={styles.payment_and_delivery__benefit}>
							<div className={styles.payment_and_delivery__benefit_img}>
								<img src={benefit.src} alt="benefit" />
							</div>
							<Text className={styles.payment_and_delivery__benefit_text}>
								{benefit.text}
							</Text>
						</div>
					))}
				</div>
				<GoogleMap />
			</div>
		</section>
	);
};

export default PaymentAndDelivery;
