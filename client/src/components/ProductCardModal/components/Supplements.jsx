import styles from "../../../styles/components/ProductCardModal.module.sass";
import Supplement from "../../../ui/Other/Supplement.jsx";

const Supplements = ({ supplementsData, setSupplements }) => {
	return (
		<div className={styles.product_card_modal__additional}>
			{supplementsData.map((item, i) => {
				const supplementFn = () => {
					setSupplements(prevSupplements => ({
						...prevSupplements,
						[item.supplement_id]: !prevSupplements[item.supplement_id]
					}));
				}

				return (
					<Supplement supplement={item} key={i} onClickFn={supplementFn} />
				);
			})}
		</div>
	);
};

export default Supplements;