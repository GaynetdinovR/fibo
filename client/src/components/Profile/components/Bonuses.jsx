import styles from "../../../styles/components/Profile.module.sass";
import H3 from "../../../ui/Titles/H3.jsx";
import DashedLink from "../../../ui/TextElements/DashedLink.jsx";
import DefaultBonus from "./DefaultBonus.jsx";
import Bonus from "./Bonus.jsx";
import { useNavigate } from "react-router-dom";

const Bonuses = ({ bonusesData }) => {
	const navigate = useNavigate();
	const userHasNoBonuses = bonusesData?.length !== 0;

	const bonusesElem = userHasNoBonuses ? (
		<DefaultBonus />
	) : (
		bonusesData?.map((bonus, i) => <Bonus key={i} bonus={bonus} />)
	);

	return (
		<div className={styles.profile__bonuses}>
			<div className={styles.profile__bonuses_wrap}>
				<H3 className={styles.profile__title}>Мои бонусы</H3>

				<div className={styles.profile__bonuses_list}>
					{bonusesElem}
				</div>

				<DashedLink
					onClickFn={() => navigate("/promo")}
					className={styles.profile__bonuses_link}
				>
					Все наши акции
				</DashedLink>
			</div>
		</div>
	);
};

export default Bonuses;