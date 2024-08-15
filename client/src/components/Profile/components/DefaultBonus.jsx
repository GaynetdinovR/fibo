import styles from "../../../styles/components/Profile.module.sass";
import classNames from "classnames";

const DefaultBonus = () => {
	return (
		<div
			className={classNames(
				styles.profile__bonuses_bonus,
				styles.profile__bonuses_default_bonus
			)}
		>
			<div className={styles.profile__bonuses_bonus_img}>
				<img src="./icons/promo_icon.png" alt="promo" />
			</div>
			<span className={styles.profile__bonuses_bonus_text}>
				Бонусы появятся здесь после заказа
			</span>
		</div>
	);
};

export default DefaultBonus;