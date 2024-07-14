import styles from "../../styles/components/Banners.module.sass";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

const Banners = () => {
	const banners = [
		{ src: "./content/banner_1.jpg" },
		{ src: "./content/banner_3.jpg" },
		{ src: "./content/banner_2.jpg" }
	];

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 1
		},
		mobile: {
			breakpoint: { max: 768, min: 0 },
			items: 1,
			slidesToSlide: 1
		}
	};

	return (
		<Carousel
			swipeable={true}
			draggable={false}
			showDots={false}
			responsive={responsive}
			ssr={true}
			infinite={true}
			autoPlay={true}
			autoPlaySpeed={4000}
			keyBoardControl={true}
			containerClass={styles.banners__carousel}
		>
			{banners.map((banner, i) => (
				<div key={i} className={styles.banners__banner}>
					<img src={banner.src} alt="banner" />
				</div>
			))}
		</Carousel>
	);
};

export default Banners;