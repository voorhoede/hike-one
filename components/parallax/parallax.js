import React from 'react';
import getParallaxYOffset from '../_helpers/getParallaxYOffset';
import isElementInView from '../_helpers/isElementInView';
import TweenLite from "gsap";

//todo: fix this.scrollheight = 0 when scrolling down to footer and reloading
class parallax extends React.Component {
	constructor(props) {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.setInitialOffSet = this.setInitialOffSet.bind(this);
		this.ticking = false;
		this.speed = props.speed ? 1 - parseFloat(props.speed) : -0.3;
		this.offset = props.offset ? parseInt(props.offset) : 0;
		this.maxDistance = props.distance ? parseInt(props.distance) : null;
		this.elementOffset = 0;
		this.duration = props.duration ? parseInt(props.duration) : 0.3;
	}

	componentDidMount() {
		// only add animation when requestAnimationFrame is supported
		if (typeof window.requestAnimationFrame !== 'undefined') {
			this.elementRect = this.element.getBoundingClientRect();

			this.setInitialOffSet();
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

	setInitialOffSet() {
		this.elementOffset = getParallaxYOffset(this.element, this.speed);

		// apply offset
		this.element.style.transform = `translate3d(0px, ${this.elementOffset}px, 0px)`;
	 	// show layers only after offset to prevent jumping animations
		this.element.style.visibility = 'visible';
	}

	animateLayers() {
		const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;

		// only animate element when in view
		if (!isElementInView(this.element))  {
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

		if (this.duration === 0) {
			// don't use tweenlite if animation is instant
			this.element.style.transform = `matrix(1, 0, 0, 1, 0, ${yOffset})`;
		} else {
			// use tweenlite for a smooth parallax effect
			TweenLite.to(this.element, this.duration, {y: yOffset}, {ease: "Linear.easeNone" });
		}
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
