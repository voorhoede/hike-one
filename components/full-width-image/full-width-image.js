import React from 'react';
import elementIsInView from '../_helpers/isElementInView';

class FullWidthImage extends React.Component {
	constructor() {
		super();
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
		this.initialScrollHeight = 0;
		this.speed = 0.5;
		this.ticking = false;
		this.showImage = this.showImage.bind(this);
		
	}

	componentDidMount() {
		// only add animation when requestAnimationFrame is supported
		if (typeof window.requestAnimationFrame !== 'undefined') {
			this.initialScrollHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;

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
		// update an animation before the next repaint with requestAnimationFrame
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				this.animateLayers();
				this.ticking = false;
			});
		}
		this.ticking = true;
	}

	onResize() {
		// update an animation before the next repaint with requestAnimationFrame
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				this.setOffsetOnResize();
				this.ticking = false;
			});
		}
		this.ticking = true;
	}

	animateLayers() {
		if (!elementIsInView(this.element) ) {
			if (!this.elementReset) {
				this.resetElement();
			}

			this.elementReset = true;
			return;
		}

		this.elementReset = false;
		this.elementTop = this.elementTop ? this.elementTop : this.element.getBoundingClientRect().top + window.pageYOffset;
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;
		const relativeScroll = this.initialScrollHeight - scrolledHeight;
		const yOffsetFixed = this.elementTop + relativeScroll;
		const yOffsetImage = -(this.elementTop + relativeScroll) * this.speed;
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
		if (elementIsInView(this.element)) {
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
		const url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
		const img = new Image();
		img.src = url;
		return img;
	}

	resetElement() {
		this.fixedElement.style.transform = `translate3d(0px, -110%, 0px)`;
	}

	showImage(index) {
		console.log('we get here?', index);
	}

	render() {
		const {image, index, title, subtitle, links, overlay} = this.props;
		const heroImageSmall = `${image}auto=format&fit=max&q=90&w=768`;
		const heroImageMedium = `${image}auto=format&fit=max&q=90&w=1170`;
		const heroImageLarge = `${image}auto=format&fit=max&q=90&w=1600`;
		const heroImageExtraLarge = `${image}auto=format&fit=max&q=90&w=1920`;
		const style ={__html:
			`<style>
				.full-width-image-background-${index} {
					background-image: url(${heroImageSmall});
				}
			@media only screen and (min-width: 500px) {
				.full-width-image-background-${index} {
					background-image: url(${heroImageMedium});
				}
			}
			@media only screen and (min-width: 768px) {
				.full-width-image-background-${index} {
					background-image: url(${heroImageLarge});
				}
			}
			@media only screen and (min-width: 1170px) {
				.full-width-image-background-${index} {
					background-image: url(${heroImageExtraLarge});
				}
			}
			
		</style>`};

        return (
			<div className={`full-width-image full-width-image-overlay 
							${index ? 'full-width-image-show' : ''}`} 
				ref={node => this.element = node}>
				<div className={`full-width-image-inner  ${overlay ? '' : ''}`}
					 ref={node => this.fixedElement = node}
					 style={{transform: `translate3d(0px, -110%, 0px)`}}>
					<div className={`full-width-image-background full-width-image-background-${index}`}
						 ref={node => this.imageElement = node}
						 style={{ backgroundImage: `url(${this.props.image})`}} >
					</div>
				</div>

                {(title || subtitle || links) &&
					<div className="full-width-image-text">
                    	{ title && <h2>{title}</h2> }
						{ subtitle && <p>{subtitle}</p> }
						{ links &&
							Object.values(links).map(
								(link, index)=> {
									return <button key={index} onClick={() => {this.showImage(index)}}
										className="full-width-image-action">{link.title}</button>
								}
							)
						}	
                	</div>
                }
				<div dangerouslySetInnerHTML={style}></div>
            </div>
        );
    }
}

export default FullWidthImage;
