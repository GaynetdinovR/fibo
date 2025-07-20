import styles from "../../../styles/components/Header.module.sass";

const Service = () => {
	return (
		<div className={styles.header__service}>
			<div className={styles.header__service_img}>
				<img src="./icons/yandex_food.png" alt="yandex_food" />
			</div>

			<span className={styles.header__service_name}>Яндекс Еда</span>

			<div className={styles.header__service_grade}>
				<span>4.8</span>
				<div>
					<img src="./icons/star.png" alt="star" />
				</div>
			</div>

			<div className={styles.header__delivery_time}>
				<span>Время доставки</span>
				<span>от 31 мин</span>
			</div>
		</div>
	);
};

export default Service;
