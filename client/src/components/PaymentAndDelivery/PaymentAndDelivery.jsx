import styles from "../../styles/components/PaymentAndDelivery.module.sass";
import H3 from "../../ui/Titles/H3.jsx";
import Text from "../../ui/TextElements/Text.jsx";
import { lazy, memo, Suspense, useMemo } from "react";

const GoogleMap = lazy(() => import('../../ui/Other/GoogleMap.jsx'));

const BENEFITS = [
	{ src: "./icons/shop.webp", text: "Широкий выбор блюд" },
	{ src: "./icons/car_with_paper.webp", text: "Полная информация о заказе" },
	{
		src: "./icons/check.webp",
		text: "Удобное составление и быстрое приготовление заказа"
	},
	{ src: "./icons/car_with_time.webp", text: "Доставка в течении 1 часа" }
];

const PaymentAndDelivery = () => {
	const benefitItems = useMemo(
		() =>
			BENEFITS.map((benefit, i) => (
				<div key={i} className={styles.payment_and_delivery__benefit}>
					<div className={styles.payment_and_delivery__benefit_img}>
						<img
							src={benefit.src}
							alt={benefit.text}
							loading="lazy"
							width={48}
							height={48}
						/>
					</div>
					<Text className={styles.payment_and_delivery__benefit_text}>
						{benefit.text}
					</Text>
				</div>
			)),
		[]
	);

	return (
		<section className={styles.payment_and_delivery}>
			<div className={styles.payment_and_delivery__inner}>
				<H3 className={styles.payment_and_delivery__title}>
					Оплата и доставка
				</H3>

				<div className={styles.payment_and_delivery__content}>
					{benefitItems}
				</div>

				<Suspense fallback={<div>Загрузка карты...</div>}>
					<GoogleMap className={styles.payment_and_delivery__map} />
				</Suspense>
			</div>
		</section>
	);
};

export default memo(PaymentAndDelivery);
