import Carousel from "react-multi-carousel";

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

const CarouselWithArrows = ({ children, responsiveSettings, className, settings }) => {
	return (
		<Carousel
			{...{ ...settings, ...CAROUSEL_SETTINGS }}
			responsive={responsiveSettings}
			containerClass={className}
		>
			{children}
		</Carousel>
	);
};

export default CarouselWithArrows;