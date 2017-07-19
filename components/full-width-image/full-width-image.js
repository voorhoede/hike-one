import React from 'react';
import elementIsInView from '../_helpers/isElementInView';

class FullWidthImage extends React.Component {
	constructor() {
		super();
		this.setImageBottomOffset = this.setImageBottomOffset.bind(this);
		this.setInitialOffset = this.setInitialOffset.bind(this);
		this.setLayerOffsets = this.setLayerOffsets.bind(this);
		this.resetElement = this.resetElement.bind(this);
		this.onScroll = this.onScroll.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.speed = 0.5;
		this.state = {
			imageBottomOffset: 0
		};
	}

	componentDidMount() {
		this.initialScrollHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;
		this.elBoundingRect = this.element.getBoundingClientRect();
		this.setImageBottomOffset();

		if (elementIsInView(this.element)) {
			this.setInitialOffset();
		}

		window.addEventListener('scroll', this.onScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
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

	animateLayers() {
		if (!elementIsInView(this.element) ) {
			if (!this.elementReset) {
				this.resetElement();
			}

			this.elementReset = true;
			return;
		}

		this.elementReset = false;
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;
		const relativeScroll = this.initialScrollHeight - scrolledHeight;
		const yOffsetFixed = this.elBoundingRect.top + relativeScroll;
		const yOffsetImage = -(this.elBoundingRect.top + relativeScroll) * this.speed;

		this.setLayerOffsets(yOffsetFixed, yOffsetImage);
	}

	setInitialOffset() {
		const yOffsetFixed = this.elBoundingRect.top;
		const yOffsetImage = -this.elBoundingRect.top * this.speed;

		this.setLayerOffsets(yOffsetFixed, yOffsetImage);
	}

	setLayerOffsets(yOffsetFixed, yOffsetImage) {
		this.fixedElement.style.transform = `translate3d(0px, ${yOffsetFixed}px, 0px)`;
		this.imageElement.style.transform = `translate3d(0px, ${yOffsetImage}px, 0px)`;
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
			this.setState({imageBottomOffset});
		}
	}

	resetElement() {
		this.fixedElement.style.transform = `translate3d(0px, -110%, 0px)`;
	}

	render() {
        const props = this.props;
        return (
            <div className="full-width-image" ref={node => this.element = node}>
				<div className="full-width-image-inner"
					 ref={node => this.fixedElement = node}
					 style={{transform: `translate3d(0px, -110%, 0px)`}}>
					<div className="full-width-image-background"
						 ref={node => this.imageElement = node}
						 style={{
						 	backgroundImage: `url(${this.props.image})`,
							bottom: this.state.imageBottomOffset
						 }} >
					</div>
				</div>

                {(props.title || props.subtitle) &&
					<div className="full-width-image-text">
                    	{ props.title && <h2>{props.title}</h2> }
                    	{ props.subtitle && <p>{props.subtitle}</p> }
                	</div>
                }
            </div>
        );
    }
}

export default FullWidthImage;
