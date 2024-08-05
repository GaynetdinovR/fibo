import styles from "../../styles/components/Other.module.sass";

const ButtonToTop = () => {
	return (
		<a href="#" className={styles.button_to_top}>
			<img src="./icons/top_arrow.png" alt="top_arrow" />
		</a>
	);
};

export default ButtonToTop;