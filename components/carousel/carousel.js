import PropTypes from 'prop-types';

import Slider from 'react-slick';
import ArrowCarousel from '../icons/arrow-carousel';
import InlineVideo from '../inline-video/inline-video';

const Arrow = ({ className, onClick }) => (
	<button className={className} onClick={onClick}>
		<ArrowCarousel />
	</button>
);

const Carousel = ({ slides = [], isWide = false }) => {
	const settings = {
		dots: false,
		infinite: true,
		nextArrow: <Arrow />,
		prevArrow: <Arrow />,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 500,
	};

	const renderBody = slides.every((slide) => slide.body);

	return (
		<Slider
			className={`
				carousel
				${renderBody ? 'carousel--has-body' : ''}
				${isWide ? 'carousel--is-wide' : ''}
			`}
			{...settings}
		>
			{slides.map((slide, index) => {
				const media = slide.media[0];
				const mediaToRender =
					media.mediaType === 'image' ? (
						<img className="carousel__image" src={media.image.url} />
					) : (
						<InlineVideo
							video={media.video}
							autoplay={media.autoplay}
							mute={media.mute}
							loop={media.loop}
							controls={media.controls}
						/>
					);

				return (
					<div key={index}>
						{mediaToRender}
						{renderBody && (
							<div className="carousel__body" dangerouslySetInnerHTML={{ __html: slide.body }} />
						)}
					</div>
				);
			})}
		</Slider>
	);
};

Carousel.propTypes = {
	slides: PropTypes.array,
	isWide: PropTypes.bool,
};

export default Carousel;
