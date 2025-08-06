import Carousel from "react-multi-carousel";

const CAROUSEL_SETTINGS = {
	swipeable: true,
	draggable: false,
	showDots: false,
	infinite: true,
	autoPlay: false,
	partialVisible: false,
	keyBoardControl: true,
	shouldResetAutoplay: false,
	rewind: false,
	ssr: true,
	loading: () => (
		<div style={{ minHeight: '280px' }}>Загрузка карусели...</div>
	)
};

const CarouselWithArrows = ({ children, responsiveSettings, className, settings }) => {
	return (
		<Carousel
			{...CAROUSEL_SETTINGS}
			{...settings}
			responsive={responsiveSettings}
			containerClass={className}
		>
			{children}
		</Carousel>
	);
};

export default CarouselWithArrows;