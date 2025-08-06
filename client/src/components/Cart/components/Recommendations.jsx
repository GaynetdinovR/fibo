import styles from "../../../styles/components/Cart.module.sass";
import H4 from "../../../ui/Titles/H4.jsx";
import RecommendatedProduct from "../../../ui/Other/RecommendatedProduct.jsx";
import CarouselWithArrows from "../../../ui/Other/CarouselWithArrows.jsx";
import { useRecommendations } from "../../../hooks/useRecommendations.js";

const CAROUSEL_RESPONSIVE = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
		slidesToSlide: 1,
		partialVisibilityGutter: 40
	},
	tablet: {
		breakpoint: { max: 1024, min: 540 },
		items: 2,
		slidesToSlide: 1,
		partialVisibilityGutter: 30
	},
	mobile: {
		breakpoint: { max: 540, min: 0 },
		items: 1,
		slidesToSlide: 1,
		partialVisibilityGutter: 20
	}
};

const Recommendations = () => {
	const recommendations = useRecommendations();

	return (
		<div className={styles.cart__recommendations}>
			<H4 className={styles.cart__recommendations_title}>
				Добавить к заказу?
			</H4>
			<div className={styles.cart__recommendations_content}>
				<CarouselWithArrows
					className={styles.cart__recommendations_carousel}
					responsiveSettings={CAROUSEL_RESPONSIVE}
					settings={{
						centerMode: false,
						partialVisible: false
					}}
				>
					{recommendations?.map((product, i) => (
						<RecommendatedProduct product={product} key={i} />
					))}
				</CarouselWithArrows>
			</div>
		</div>
	);
};

export default Recommendations;
