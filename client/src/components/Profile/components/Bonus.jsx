import styles from "../../../styles/components/Profile.module.sass";

const Bonus = ({ bonus }) => {
    return (
        <div className={styles.profile__bonuses_bonus}>
            {bonus}
        </div>
    );
};

export default Bonus;