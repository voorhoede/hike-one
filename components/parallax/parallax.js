import { Component } from 'react';
import PropTypes from 'prop-types';
import isElementInView from '../_helpers/isElementInView';
import TweenLite from 'gsap';

class Parallax extends Component {
	constructor(props) {
		super();
		this.onScroll = this.onScroll.bind(this);
		this.onResize = this.onResize.bind(this);
		this.getYOffset = this.getYOffset.bind(this);
		this.setYOffset = this.setYOffset.bind(this);
		this.setInitialOffSet = this.setInitialOffSet.bind(this);
		this.setOffsetOnResize = this.setOffsetOnResize.bind(this);
		this.resizeTimer = null;
		this.speed = props.speed ? 1 - parseFloat(props.speed) : -0.3;
		this.elementOffset = 0;
		this.duration = props.duration ? parseInt(props.duration) : 0.3;

		this.state = {
			ticking: false,
		};
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
		const { ticking } = this.state;
		// update an animation before the next repaint with requestAnimationFrame
		if (!ticking) {
			window.requestAnimationFrame(() => {
				const YOffSet = this.getYOffset();
				this.setYOffset(YOffSet);
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

	setInitialOffSet() {
		this.elementOffset = this.getParallaxYOffset();

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
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;

		// only animate element when in view
		if (!isElementInView(this.containerEl)) {
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
		this.duration === 0 || noAnimation
			? // don't use tweenlite if animation is instant
			  (this.element.style.transform = `matrix(1, 0, 0, 1, 0, ${yOffset})`)
			: // use tweenlite for a smooth parallax effect
			  TweenLite.to(this.element, this.duration, { y: yOffset }, { ease: 'Linear.easeNone' });
	}

	getParallaxYOffset() {
		const elBoundingRect = this.element.getBoundingClientRect();
		const windowHeight = document.body.clientHeight || document.documentElement.clientHeight || 0;
		const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;

		// y coordinate bottom of viewport relative from top of document
		const bottomScreen = windowHeight + scrolledHeight;
		// y coordinate top of element relative from top of document
		const elementTop = elBoundingRect.top + window.pageYOffset;
		// y coordinate bottom of element relative from top of document
		const elementBottom = elBoundingRect.bottom + window.pageYOffset;
		const elementHalf = elBoundingRect.height / 2;
		const windowHalf = windowHeight / 2;

		if (elementTop > bottomScreen) {
			// element below viewport
			return -((elementHalf + windowHalf) * this.speed);
		} else if (elementBottom < scrolledHeight) {
			// element above viewport
			return (elementHalf + windowHalf) * this.speed;
		} else {
			// element is partial in view
			const viewportMiddle = scrolledHeight + windowHalf;
			const elementMiddle = elementTop + elementHalf;

			// how far is element middle from viewportMiddle
			const elementFromMiddle = elementMiddle - viewportMiddle;

			if (elementFromMiddle > 0) {
				// element middle under middle of the viewport
				return -(elementFromMiddle * this.speed);
			} else {
				// element middle over middle of the viewport
				return -elementFromMiddle * this.speed;
			}
		}
	}

	render() {
		const { children } = this.props;

		return (
			<div ref={(node) => (this.containerEl = node)} className="parallax-layer-container">
				<div
					ref={(node) => (this.element = node)}
					className="parallax-layer"
					style={{ visibility: 'hidden' }}
				>
					{children}
				</div>
			</div>
		);
	}
}

Parallax.propTypes = {
	speed: PropTypes.string,
	duration: PropTypes.number,
	children: PropTypes.node,
};

export default Parallax;
