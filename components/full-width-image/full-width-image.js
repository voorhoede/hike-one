import { Component } from 'react';
import PropTypes from 'prop-types';
import isElementInView from '../_helpers/isElementInView';
import setImageParams from '../_helpers/setImageParameters';

class FullWidthImage extends Component {
	constructor(props) {
		super(props);
		this.setImageBottomOffset = this.setImageBottomOffset.bind(this);
		this.setInitialValues = this.setInitialValues.bind(this);
		this.setInitialOffset = this.setInitialOffset.bind(this);
		this.setLayerOffsets = this.setLayerOffsets.bind(this);
		this.setOffsetOnResize = this.setOffsetOnResize.bind(this);
		this.setEvents = this.setEvents.bind(this);
		this.resetElement = this.resetElement.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.onResize = this.onResize.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.getBackgroundImage = this.getBackgroundImage.bind(this);
		this.resizeTimer = null;
		this.elBoundingRect = null;
		this.speed = 0.5;
		this.state = {
			ticking: false,
		};
	}

	componentDidMount() {
		// only add animation when requestAnimationFrame is supported
		if (typeof window.requestAnimationFrame !== 'undefined') {
			// wait until image is loaded
			const backgroundImage = this.getBackgroundImage();

			if (!backgroundImage.complete) {
				// background image not yet loaded
				backgroundImage.onload = () => {
					this.setInitialValues();
					this.setEvents();
				};
			} else {
				// background image load complete
				this.setInitialValues();
				this.setEvents();
			}
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
		window.removeEventListener('resize', this.onResize);
	}

	onScroll() {
		const { ticking } = this.state;
		// update an animation before the next repaint with requestAnimationFrame
		if (!ticking) {
			window.requestAnimationFrame(() => {
				this.animateLayers();
				this.setState({ ticking: false });
			});
		}

		this.setState({ ticking: true });
	}

	onResize() {
		const { ticking } = this.state;
		// update an animation before the next repaint with requestAnimationFrame
		if (!ticking) {
			window.requestAnimationFrame(() => {
				this.setOffsetOnResize();
				this.setState({ ticking: false });
			});
		}

		this.setState({ ticking: true });
	}

	animateLayers() {
		if (!isElementInView(this.element)) {
			if (!this.elementReset) {
				this.resetElement();
			}

			this.elementReset = true;
			return;
		}

		this.elementReset = false;
		this.elementTop = this.elementTop
			? this.elementTop
			: this.element.getBoundingClientRect().top + window.pageYOffset;
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;
		const yOffsetFixed = this.elementTop - scrolledHeight;
		const yOffsetImage = -(this.elementTop + -scrolledHeight) * this.speed;
		this.setLayerOffsets(yOffsetFixed, yOffsetImage);
	}

	setEvents() {
		window.addEventListener('scroll', this.onScroll);
		window.addEventListener('resize', this.onResize);
	}

	setInitialValues() {
		this.elBoundingRect = this.element.getBoundingClientRect();
		this.setImageBottomOffset();
		this.setInitialOffset();
	}

	setInitialOffset() {
		if (isElementInView(this.element)) {
			const yOffsetFixed = this.elBoundingRect.top;
			const yOffsetImage = -this.elBoundingRect.top * this.speed;

			this.setLayerOffsets(yOffsetFixed, yOffsetImage);
		}
	}

	setLayerOffsets(yOffsetFixed, yOffsetImage) {
		this.fixedElement.style.transform = `translate3d(0px, ${yOffsetFixed}px, 0px)`;
		this.imageElement.style.transform = `translate3d(0px, ${yOffsetImage}px, 0px)`;
	}

	setOffsetOnResize() {
		// add debounce for resize so it fires only add the end of resize
		clearTimeout(this.resizeTimer);
		this.resizeTimer = setTimeout(() => {
			this.elementTop = null;
			this.setInitialValues();
		}, 250);
	}

	setImageBottomOffset() {
		const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;

		// initial y offset image when not in view
		const initialYOffsetImage = windowHeight * this.speed;

		// total distance that the image moves
		const totalTravelDistance = this.elBoundingRect.height * this.speed;

		// if the total travel distance of the image is smaller then its initial y offset
		// then the image needs to be made bigger so that its heigh enough that it fills the whole container element
		// this is done by offsetting the bottom css attribute
		if (totalTravelDistance < initialYOffsetImage) {
			const imageBottomOffset = totalTravelDistance - initialYOffsetImage;
			this.imageElement.style.bottom = `${imageBottomOffset}px`;
		}
	}

	getBackgroundImage() {
		const src = window.getComputedStyle(this.imageElement).backgroundImage;
		const url = src.match(/\((.*?)\)/)[1].replace(/('|")/g, '');
		const img = new Image();
		img.src = url;
		return img;
	}

	resetElement() {
		this.fixedElement.style.transform = `translate3d(0px, -200%, 0px)`;
	}

	render() {
		const { image = '', index = 0, title = '', subtitle = '', overlay = false } = this.props;
		const imageParams = { fit: 'crop' };
		const style = {
			__html: `<style>
				@media (max-width: 767px) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 768, h: 600 })}')
					}
				}
				@media (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
				@media (max-width: 767px) and (min-resolution: 192dpi) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 768, h: 600, dpr: 2 })}')
					}
				}
				@media (min-width: 768px) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 1170, h: 700 })}')
					}
				}
				@media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
				@media (min-width: 768px) and (min-resolution: 192dpi) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 1170, h: 700, dpr: 2 })}')
					}
				}
				@media (min-width: 1170px) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 1440, h: 800 })}')
					}
				}
				@media (min-width: 1170px) and (-webkit-min-device-pixel-ratio: 2),
				@media (min-width: 1170px) and (min-resolution: 192dpi) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 1440, h: 800, dpr: 2 })}')
					}
				}
				@media (min-width: 1440px) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 1920, h: 1000 })}')
					}
				}
				@media (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
				@media (min-width: 1440px) and (min-resolution: 192dpi) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 1920, h: 1000, dpr: 2 })}')
					}
				}
				@media (min-width: 1920px) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 2500, h: 1200 })}')
					}
				}
				@media (min-width: 1920px) and (-webkit-min-device-pixel-ratio: 2),
				@media (min-width: 1920px) and (min-resolution: 192dpi) {
					.full-width-image-background-${index} {
						background-image: url('${setImageParams(image, { ...imageParams, w: 2500, h: 1200, dpr: 2 })}')
					}
				}
			</style>`,
		};

		return (
			<div className="full-width-image" ref={(node) => (this.element = node)}>
				<div dangerouslySetInnerHTML={style} />
				<div
					className={`full-width-image-inner`}
					ref={(node) => (this.fixedElement = node)}
					style={{ transform: `translate3d(0px, -200%, 0px)` }}
				>
					<div
						className={`full-width-image-background full-width-image-background-${index}`}
						ref={(node) => (this.imageElement = node)}
					/>
					{overlay && <div className="full-width-image-overlay" />}
				</div>
				{(title || subtitle) && (
					<div className="full-width-image-text">
						{title && <h2>{title}</h2>}
						{subtitle && <p>{subtitle}</p>}
					</div>
				)}
			</div>
		);
	}
}

FullWidthImage.propTypes = {
	image: PropTypes.string,
	index: PropTypes.number,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	overlay: PropTypes.bool,
};

export default FullWidthImage;
