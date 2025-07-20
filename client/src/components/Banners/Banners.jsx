import styles from "../../styles/components/Banners.module.sass";
import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import BannerItem from "./components/BannerItem.jsx";

const BANNERS = [
	{ src: "./content/banner_1.jpg", alt: "Специальное предложение на пиццу" },
	{ src: "./content/banner_3.jpg", alt: "Новые пасты в меню" },
	{ src: "./content/banner_2.jpg", alt: "Скидки на наборы" }
];

const CAROUSEL_RESPONSIVE = {
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

const CAROUSEL_SETTINGS = {
	swipeable: true,
	draggable: false,
	showDots: false,
	ssr: true,
	infinite: true,
	autoPlay: true,
	autoPlaySpeed: 4000,
	keyBoardControl: true
};

const Banners = ({ banners = BANNERS }) => {
	return (
		<Carousel
			{...CAROUSEL_SETTINGS}
			responsive={CAROUSEL_RESPONSIVE}
			containerClass={styles.banners__carousel}
		>
			{banners.map((banner, i) => (
				<BannerItem key={i} src={banner.src} alt={banner.alt} />
			))}
		</Carousel>
	);
};
export default Banners;
