import styles from "../../styles/components/Other.module.sass";

const ButtonToTop = () => {
	return (
		<button onClick={() => {window.scrollTo(0, 0)}} className={styles.button_to_top}>
			<img src="./icons/top_arrow.png" alt="top_arrow" />
		</button>
	);
};

export default ButtonToTop;