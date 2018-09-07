import React from 'react';
import Icon from '../icon/icon';
import setImageParams from '../_helpers/setImageParameters';

class PageHeader extends React.Component {
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
			this.video.load();
			this.video.addEventListener('loadeddata', this.showVideo);
		}
	}

	componentWillReceiveProps() {
		this.setState({showVideo: false});
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
		console.log(props)
		const childrenArray = React.Children.toArray(props.children);
		let parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
		let parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

		const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 }
		const heroImageSmall = `${setImageParams(props.image, {...imageParameters, w: 1000} )}`;
		const heroImageMedium = `${setImageParams(props.image, {...imageParameters, w: 1500} )}`;
		const heroImageLarge = `${setImageParams(props.image, {...imageParameters, w: 2000} )}`;

		const style ={__html:
			`<style>
				.page-header {
					background-image: url(${heroImageSmall});
				}
				@media only screen and (min-width: 768px) {
					.page-header {
						background-image: url(${heroImageMedium});
					}
				}
				@media only screen and (min-width: 1170px) { 
					.page-header {
						background-image: url(${heroImageLarge});
					}
				}
			${props.video ?
				`@media only screen and (min-width: 768px) {
					.page-header {
						background-image: none;
					}
				}` : '' }
			}		
			</style>`};

		return (
			<section
				ref={node => this.element = node}
				className={`page-header
					${props.showGradient ? 'show-gradient': ''}
					${props.isSmall ? 'page-header-small' : ''}
					${this.state.showVideo ? 'show-video': ''}`}>
				{ parallaxLayerBack }
				{ props.video &&
					<video ref={node => this.video = node}
					    src={props.video}
						className="page-header-video"
						playsInline autoPlay muted loop>
					</video>
				}

				<div className="page-header-inner container">
					<div ref={node => this.parallaxLayer = node}>
						{ props.onClickScrollButton
							? <a className="page-header-title-link" href='#' onClick={props.onClickScrollButton}><h1 className="page-header-title ">{props.title}</h1></a>
							: <h1 className="page-header-title ">{props.title}</h1> }
						
						{ props.subtitle &&
							props.onClickScrollButton
								? <a className="page-header-subtitle-link" href='#' onClick={props.onClickScrollButton}><p className="page-header-subtitle">{props.subtitle}</p></a>
								: <p className="page-header-subtitle">{props.subtitle}</p> }
						
						{ props.onClickScrollButton &&
							<button className="page-header-button"
									onClick={props.onClickScrollButton ? props.onClickScrollButton : null}>
								<Icon icon="arrowDownCircle" />
							</button>
						}
					</div>
				</div>
				<div dangerouslySetInnerHTML={style}></div>
				{parallaxLayerFront}
			</section>
		);
	}
};

export default PageHeader;
