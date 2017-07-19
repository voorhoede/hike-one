import React from 'react';
import getParallaxYOffset from '../_helpers/getParallaxYOffset';
import isElementInView from '../_helpers/isElementInView';
import TweenLite from "gsap";

//todo: fix this.scrollheight = 0 when scrolling down to footer and reloading
class parallax extends React.Component {
	constructor(props) {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.onResize = this.onResize.bind(this);
		this.getYOffset = this.getYOffset.bind(this);
		this.setYOffset = this.setYOffset.bind(this);
		this.setInitialOffSet = this.setInitialOffSet.bind(this);
		this.setOffsetOnResize = this.setOffsetOnResize.bind(this);
		this.ticking = false;
		this.resizeTimer = null;
		this.speed = props.speed ? 1 - parseFloat(props.speed) : -0.3;
		this.elementOffset = 0;
		this.duration = props.duration ? parseInt(props.duration) : 0.3;
	}

	componentDidMount() {
		// only add animation when requestAnimationFrame is supported
		if (typeof window.requestAnimationFrame !== 'undefined') {
			this.setInitialOffSet();
			window.addEventListener('scroll', this.onScroll);
			window.addEventListener('resize', this.onResize);
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
				const YOffSet = this.getYOffset();
				this.setYOffset(YOffSet);
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

	setInitialOffSet() {
		this.elementOffset = getParallaxYOffset(this.element, this.speed);

		// apply offset
		this.element.style.transform = `translate3d(0px, ${this.elementOffset}px, 0px)`;
	 	// show layers only after offset to prevent jumping animations
		this.element.style.visibility = 'visible';
	}

	setOffsetOnResize() {
		// add debounce for resize so it fires only add the end of resize
		clearTimeout(this.resizeTimer);
		this.resizeTimer = setTimeout(() => {
			this.initialScrollHeight = null;
			this.setInitialOffSet();
			const YOffSet = this.getYOffset();
			this.setYOffset(YOffSet, true);
		}, 250);
	}

	getYOffset() {
		const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;

		// only animate element when in view
		if (!isElementInView(this.containerEl))  {
			return;
		}

		// set initial scrollheight
		this.initialScrollHeight = this.initialScrollHeight ? this.initialScrollHeight : scrolledHeight;

		// calculate relative scroll height
		let relativeScroll = scrolledHeight - this.initialScrollHeight;

		// calculate y offset and return it
		return relativeScroll * this.speed + this.elementOffset;
	}

	setYOffset(yOffset, noAnimation) {
		if (this.duration === 0 || noAnimation) {
			// don't use tweenlite if animation is instant
			this.element.style.transform = `matrix(1, 0, 0, 1, 0, ${yOffset})`;
		} else {
			// use tweenlite for a smooth parallax effect
			TweenLite.to(this.element, this.duration, {y: yOffset}, {ease: "Linear.easeNone" });
		}
	}

	render() {
		return (
			<div ref={(node) => this.containerEl = node } className="parallax-layer-container">
				<div ref={(node) => this.element = node } className="parallax-layer" style={{'visibility': 'hidden'}}>
					{ this.props.children }
				</div>

			</div>
		);
	}
}

export default parallax;
