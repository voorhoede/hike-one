import React from 'react';

import elementIsInView from '../_helpers/elementIsInView';
import CircleBorder from '../shapes/circle-border/circle-border';
import DiamondBorder from '../shapes/diamond-border/diamond-border';
import RectangleBorder from '../shapes/rectangle-border/rectangle-border';
import Triangle from '../shapes/triangle/triangle';

class Shapes extends React.Component {
	constructor() {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.addScrollEventListener = this.addScrollEventListener.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.ticking = false;
	}

	componentDidMount() {
		this.addScrollEventListener();
	}

	addScrollEventListener() {
		window.addEventListener('scroll', () => {
			if (!this.ticking) {
				this.onScroll();
			}
			this.ticking = true;
		});
	}

	onScroll() {
		const scrolledHeight = window.pageYOffset.toFixed();

		window.requestAnimationFrame(() => {
			this.animateLayers(scrolledHeight);
			this.ticking = false;
		});
	}

	animateLayers(scrolledHeight) {
		if (!elementIsInView(this.frontLayer)) {return;} // don't animate when element is not in view

		this.frontLayer.style.transform = `translate3d(0px, ${-scrolledHeight * 0.5}px, 0px)`;
		this.backLayer.style.transform = `translate3d(0px, ${scrolledHeight * 0.3}px, 0px)`;
	}

	render() {
		return (
			<div className="services-intro-shapes">
				<div ref={(node) => this.backLayer = node} className="shapes-back" >
					<RectangleBorder classes="services-intro-rectangle-1" color="red"/>
					<DiamondBorder classes="services-intro-diamond-1" color="yellow"/>
					<CircleBorder classes="services-intro-circle-1" color="green" />
				</div>
				<div ref={(node) => this.frontLayer = node} className="shapes-front">
					<Triangle classes="services-intro-triangle-1" color="red" />
					<Triangle classes="services-intro-triangle-2" color="purple" />
					<Triangle classes="services-intro-triangle-3" color="blue" shadow/>
					<Triangle classes="services-intro-triangle-4" color="yellow" />
				</div>
			</div>
		);
	}
}

export default Shapes;
