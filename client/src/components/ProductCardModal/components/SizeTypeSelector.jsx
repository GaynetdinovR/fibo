import styles from "../../../styles/components/ProductCardModal.module.sass";
import Button from "../../../ui/Button.jsx";
import classNames from "classnames";

const SizeTypeSelector = ({ sizes, types, onSelect }) => {
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
						{btn.text}
					</Button>
				);
			})}
		</div>
	);
};
export default SizeTypeSelector;
