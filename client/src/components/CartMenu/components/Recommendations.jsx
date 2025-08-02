import styles from "../../../styles/components/CartMenu.module.sass";
import RecommendatedProduct from "../../../ui/Other/RecommendatedProduct.jsx";
import { useRecommendations } from "../../../hooks/useReccomendations.js";
import { useRecommendationsUpdate } from "../../../hooks/useRecommendationsUpdate.js";

const Recommendations = ({cart}) => {
	const { generateRecommendationsByCart } = useRecommendations();

	const recommendations = useRecommendationsUpdate(cart, generateRecommendationsByCart);

	return (
		<div className={styles.cart_menu__recommendations_content}>
			{recommendations?.map((product, i) => (
				<RecommendatedProduct product={product} key={i} />
			))}
		</div>
	);
};

export default Recommendations;