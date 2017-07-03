import React from 'react';

class parallax extends React.Component {
	constructor() {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.ticking = false;
		this.frontLayerSpeed = -0.3;
		this.backLayerSpeed = 0.3;
	}

	componentDidMount() {
		this.body =  document.body;
		this.rect = this.frontLayer.getBoundingClientRect();
		// y offset relative from top of document
		this.elementTop = this.rect.top + window.pageYOffset - this.body.clientTop;
		window.addEventListener('scroll', this.onScroll);
	}

	componentUnMount() {
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
		const scrolledHeight =  this.body.scrollTop;
		const windowHeight = this.body.clientHeight;
		const bottomScreen = windowHeight + scrolledHeight;

		// if the element is not yet in view then don't add parallax effect
		if (bottomScreen <= this.elementTop) { return; }

		// set initial scrollheight
		this.initialScrollHeight = this.initialScrollHeight ? this.initialScrollHeight : scrolledHeight;

		// calculate relative scroll height
		const relativeScroll = scrolledHeight - this.initialScrollHeight;

		// if relative scroll is negative then don't add parallax effect
		if (relativeScroll < 0) { return; }

		// set y offset on parallax layers
		this.frontLayer.style.transform = `translate3d(0px, ${relativeScroll * this.frontLayerSpeed}px, 0px)`;
		this.backLayer.style.transform = `translate3d(0px, ${relativeScroll * this.backLayerSpeed}px, 0px)`;
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
