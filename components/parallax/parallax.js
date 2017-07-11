import React from 'react';
import TweenLite from "gsap";

class parallax extends React.Component {
	constructor(props) {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.ticking = false;
		this.frontLayerSpeed = props.frontLayerSpeed || -0.3;
		this.backLayerSpeed = props.backLayerSpeed || 0.3;
	}

	componentDidMount() {
		// only add animation when requestAnimationFrame is supported
		if (typeof window.requestAnimationFrame !== 'undefined') {
			this.rect = this.frontLayer.getBoundingClientRect();
			const clientTop =  document.body.clientTop || document.documentElement.clientTop || 0;
			// y offset relative from top of document
			this.elementTop = this.rect.top + window.pageYOffset - clientTop;
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

	animateLayers() {
		const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;
		const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;
		const bottomScreen = windowHeight + scrolledHeight;

		// if the element is not yet in view then don't add parallax effect
		if (bottomScreen <= this.elementTop) { return; }

		// set initial scrollheight
		this.initialScrollHeight = this.initialScrollHeight ? this.initialScrollHeight : scrolledHeight;

		// calculate relative scroll height
		const relativeScroll = scrolledHeight - this.initialScrollHeight;

		// if relative scroll is negative then don't add parallax effect
		if (relativeScroll < 0) { return; }

		// use tweenlite for a smooth parallax effect
		TweenLite.to(this.frontLayer, 0.3, {top: relativeScroll * this.frontLayerSpeed}, {ease: "Linear.easeNone" });
		TweenLite.to(this.backLayer, 0.3, {top: relativeScroll * this.backLayerSpeed}, {ease: "Linear.easeNone" });
	}

	render() {
		return (
			<div>
				<div ref={(node) => this.backLayer = node} className="parallax-layer-back">
					{ this.props.backLayer }
				</div>
				<div ref={(node) => this.frontLayer = node} className="parallax-layer-front">
					{ this.props.frontLayer }
				</div>
			</div>
		);
	}
}

export default parallax;
