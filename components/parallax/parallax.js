import React from 'react';
import TweenLite from "gsap";

//todo: fix this.scrollheight = 0 when scrolling down to footer and reloading
class parallax extends React.Component {
	constructor(props) {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.calculateInitialOffSet = this.calculateInitialOffSet.bind(this);
		this.ticking = false;
		this.speed = props.speed ? 1 - parseFloat(props.speed) : -0.3;
		this.offset = props.offset ? parseInt(props.offset) : 0;
		this.maxDistance = props.distance ? parseInt(props.distance) : null;
		this.elementOffset = 0;
	}

	componentDidMount() {
		// only add animation when requestAnimationFrame is supported
		if (typeof window.requestAnimationFrame !== 'undefined') {
			this.rect = this.element.getBoundingClientRect();
			const clientTop =  document.body.clientTop || document.documentElement.clientTop || 0;

			// y offset relative from top of document
			// todo: check if clientTop is needed
			this.elementTop = this.rect.top + window.pageYOffset - clientTop;
			this.elementBottom = this.rect.bottom + window.pageYOffset - clientTop;

			this.scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;
			this.windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;

			this.calculateInitialOffSet();
			window.addEventListener('scroll', this.onScroll);
		}
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

	calculateInitialOffSet() {
		this.bottomScreen = this.windowHeight + this.scrolledHeight;
		const elementHalf = this.rect.height / 2;
		const windowHalf = this.windowHeight / 2;

	 	if (this.elementTop > (this.bottomScreen)) {
	 		// element below viewport
			this.elementOffset = -((elementHalf + windowHalf) * (this.speed));
		} else if (this.elementBottom < this.scrolledHeight) {
			// element above viewport
			this.elementOffset = (elementHalf + windowHalf) * this.speed;
		} else  {
			// element is partial in view
			const viewportMiddle = this.scrolledHeight + (this.windowHeight / 2);
			const elementMiddle = this.elementTop + (this.rect.height / 2);

			// how far is element middle from viewportMiddle
			const elementFromMiddle = elementMiddle - viewportMiddle;

			if (elementFromMiddle > 0) {
				// element middle under middle of the viewport
				this.elementOffset = -((elementFromMiddle) * this.speed);
			} else {
				// element middle over middle of the viewport
				this.elementOffset = ((-elementFromMiddle) * this.speed);
			}
		}

		// apply offset
		this.element.style.transform = `translate3d(0px, ${this.elementOffset}px, 0px)`;
	 	// show layers only after offset to prevent jumping animations
		this.element.style.visibility = 'visible';
	}

	animateLayers() {
		const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;
		const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;
		const bottomScreen = windowHeight + scrolledHeight;

		// only animate element when in view
		if (bottomScreen <= this.elementTop ||
			scrolledHeight >= this.elementBottom)  {
			return;
		}

		// set initial scrollheight
		this.initialScrollHeight = this.initialScrollHeight ? this.initialScrollHeight : scrolledHeight;

		// calculate relative scroll height
		let relativeScroll = scrolledHeight - this.initialScrollHeight;

		// if max distance is set and met then don't animate
		if (this.maxDistance && this.maxDistance <= relativeScroll) {
			return;
		}

		// calculate y offset
		const yOffset = relativeScroll * this.speed + this.elementOffset;

		// use tweenlite for a smooth parallax effect
		TweenLite.to(this.element, 0.3, {y: yOffset}, {ease: "Linear.easeNone" });
	}

	render() {
		return (
			<div ref={(node) => this.element = node } className="parallax-layer" style={{'visibility': 'hidden'}}>
				{ this.props.children }
			</div>
		);
	}
}

export default parallax;
