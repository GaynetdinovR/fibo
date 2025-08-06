import styles from "../../../styles/components/CartMenu.module.sass";
import RecommendatedProduct from "../../../ui/Other/RecommendatedProduct.jsx";
import { useRecommendations } from "../../../hooks/useRecommendations.js";

const Recommendations = () => {
	const recommendations = useRecommendations();

	return (
		<div className={styles.cart_menu__recommendations_content}>
			{recommendations?.map((product, i) => (
				<RecommendatedProduct product={product} key={i} />
			))}
		</div>
	);
};

export default Recommendations;