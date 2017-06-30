import React from 'react';
import elementIsInView from '../_helpers/elementIsInView';

class parallax extends React.Component {
	constructor() {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.animateLayers = this.animateLayers.bind(this);
		this.ticking = false;
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll);
	}

	componentUnMount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		if (!this.ticking) {
			const scrolledHeight = window.pageYOffset.toFixed();

			window.requestAnimationFrame(() => {
				this.animateLayers(scrolledHeight);
				this.ticking = false;
			});
		}
		this.ticking = true;
	}

	animateLayers(scrolledHeight) {
		if (!elementIsInView(this.frontLayer)) {return;} // don't animate when element is not in view

		this.frontLayer.style.transform = `translate3d(0px, ${-scrolledHeight * 0.5}px, 0px)`;
		this.backLayer.style.transform = `translate3d(0px, ${scrolledHeight * 0.3}px, 0px)`;
	}

	render() {
		return (
			<div>
				<div ref={(node) => this.backLayer = node} className="parallax-layer-back" >
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
