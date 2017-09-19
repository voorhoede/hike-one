import React from 'react';
import Icon from '../icon/icon';
import TweenLite from "gsap";

class PageHeaderSmall extends React.Component {
	constructor() {
		super();
		this.range = 400;
		this.speed = -0.25;
		this.ticking = false;
		this.isHidden = false;
		this.onScroll = this.onScroll.bind(this);
		this.animateLayer = this.animateLayer.bind(this);
		this.setVisability = this.setVisability.bind(this);
		this.showVideo = this.showVideo.bind(this);
		this.state = {
			showVideo : false
		};
	}

	componentDidMount() {
		this.elementBottom = this.element.getBoundingClientRect().bottom;
		window.addEventListener('scroll', this.onScroll);

		if (this.props.video) {
			this.video.addEventListener('loadeddata', this.showVideo);
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		// update an animation before the next repaint with requestAnimationFrame
		if (!this.ticking) {
			window.requestAnimationFrame(() => {
				const scrolledHeight =  document.body.scrollTop || document.documentElement.scrollTop || 0;
				this.setVisability(scrolledHeight);
				this.animateLayer(scrolledHeight);
				this.ticking = false;
			});
		}
		this.ticking = true;
	}

	setVisability(scrolledHeight) {
		// hide or show component so that the footer is visable
		if (this.elementBottom + 200 <= scrolledHeight) {
			this.isHidden = true;
			this.element.classList.add('is-hidden');
		} else {
			this.isHidden = false;
			this.element.classList.remove('is-hidden');
		}
	}

	animateLayer(scrolledHeight) {
		// don't animate when component is hidden
		if (this.isHidden) { return; }

		// set opacity
		const opacity =  1 - (scrolledHeight / this.range);

		// set styles to animate
		const styles = {
			y: scrolledHeight * this.speed,
			opacity
		};

		// animate styles with tweenlight
		TweenLite.to(this.parallaxLayer, 0, styles, {ease: "Linear.easeNone" });
	}

	showVideo() {
		this.setState({showVideo: true});
	}

	render() {
		const props = this.props;
		const style ={__html:
			`<style>
				.page-header-small {
					background-image: url(${props.image});
				}
			${props.video ?
				`@media only screen and (min-width: 768px) {
					.page-header-small {
					background-image: none;
					}
				}` : '' }
			}		
			</style>`};

		return (
			<section
				ref={node => this.element = node}
				className={`page-header-small ${this.state.showVideo ? 'show-video': ''}`}>
				{ props.video &&
					<video ref={node => this.video = node}
					   	className="page-header-large-video"
						playsInline autoPlay muted loop>
						<source src={props.video} type="video/mp4" />
					</video>
				}

				<div className="page-header-large-inner container">
					<div ref={node => this.parallaxLayer = node}>
						<h1 className="page-header-large-title ">{props.title}</h1>
						<p className="page-header-large-subtitle">{props.subtitle}</p>
						<button className="page-header-small-button"
								onClick={props.onClickScrollButton ? props.onClickScrollButton : null}>
							<Icon icon="arrowDownCircle" />
						</button>
					</div>
				</div>
				<div dangerouslySetInnerHTML={style}></div>
			</section>
		);
	}
}
export default PageHeaderSmall;

