import styles from "../../../styles/components/ProductCardModal.module.sass";
import Button from "../../../ui/Buttons/Button.jsx";
import classNames from "classnames";
import { TEXT_SIZES, TEXT_TYPES } from "../../../constants/product_localization.js";

const SizeTypeSelector = ({ sizes, types, onSelect }) => {
	const formatType = (str) => {
		if (!str) return false;

		const firstLetter = str[0].toUpperCase();
		const truncatedString = str.slice(0, -6).slice(1);

		return firstLetter + truncatedString;
	};

	const getText = (id) => {
		return formatType(TEXT_TYPES[id]) || TEXT_SIZES[id][2] || null;
	};

	return (
		<div className={styles.product_card_modal__selection_btns}>
			{[...sizes, ...types].map((btn) => {
				const className = btn.active
					? classNames(
							styles.product_card_modal__select_btn,
							styles.product_card_modal__select_btn__active
						)
					: styles.product_card_modal__select_btn;

				return (
					<Button
						key={btn.id}
						className={className}
						isDisabled={btn.active}
						onClickFn={() => onSelect(btn.id)}
					>
						{getText(btn.id)}
					</Button>
				);
			})}
		</div>
	);
};
export default SizeTypeSelector;
