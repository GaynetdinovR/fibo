import styles from "../../styles/components/Other.module.sass";

const ButtonToTop = () => {
	/**
	 * Скролл на верх страницы
	 */
	const scrollToTop = () => {
		scroll(0, 0);
	};

	return (
		<button
			aria-label="Scroll To Top"
			onClick={scrollToTop}
			className={styles.button_to_top}
		>
			<div className={styles.button_to_top__arrow}></div>
		</button>
	);
};

export default ButtonToTop;