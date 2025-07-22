import styles from "../../styles/components/Other.module.sass";

const ButtonToTop = () => {
	/**
	 * Скролл на верх страницы
	 */
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<button onClick={scrollToTop} className={styles.button_to_top}>
			<img src="./icons/top_arrow.png" alt="top_arrow" />
		</button>
	);
};

export default ButtonToTop;