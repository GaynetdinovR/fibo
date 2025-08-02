import styles from "../../styles/Ui.module.sass";
import classNames from "classnames";
import Input from "./Input/Input.jsx";
import DashedLink from "../TextElements/DashedLink.jsx";

const InputWithDashedLink = ({ className, inputData, name, onClickFn }) => {
	return (
		<div className={classNames(styles.input_user__wrap, className)}>
			<label className={styles.input_user__label}>
				<span className={styles.input_user__span}>{name}</span>

				<Input
					className={styles.input_user__name_input}
					{...inputData}
				/>
			</label>

			<DashedLink
				onClickFn={onClickFn}
				className={styles.input_user__link}
			>
				{inputData.isDisabled ? "Изменить" : "Сохранить"}
			</DashedLink>
		</div>
	);
};

export default InputWithDashedLink;