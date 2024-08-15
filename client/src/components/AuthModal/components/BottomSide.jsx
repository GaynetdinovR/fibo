import styles from "../../../styles/components/AuthModal.module.sass";
import Button from "../../../ui/Button.jsx";
import Text from "../../../ui/Text.jsx";

const BottomSide = ({ getCodeBtnClicked }) => {
	return (
		<div className={styles.auth_modal__bottom_side}>
			<Button
				onClickFn={getCodeBtnClicked}
				className={styles.auth_modal__get_code_btn}
			>
				Выслать код
			</Button>

			<Text className={styles.auth_modal__terms_of_use}>
				<span>Продолжая, вы соглашаетесь </span>
				<a
					target="blank"
					href="https://en.wikipedia.org/wiki/Terms_of_service"
				>
					со сбором и обработкой персональных данных и
					пользовательским соглашением
				</a>
			</Text>
		</div>
	);
};

export default BottomSide;