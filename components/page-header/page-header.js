import { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon/icon';

import setImageParams from '../_helpers/setImageParameters';

class PageHeader extends Component {
	constructor(props) {
		super(props);
		this.onScroll = this.onScroll.bind(this);
		this.setVisability = this.setVisability.bind(this);
		this.range = 400;
		this.speed = -0.25;
		this.state = {
			showVideo: false,
			ticking: false,
		};
	}

	componentDidMount() {
		this.elementBottom = this.element.getBoundingClientRect().bottom;
		window.addEventListener('scroll', this.onScroll);

		if (this.props.video) {
			this.video.load();
			this.video.addEventListener('loadeddata', this.setState({ showVideo: true }));
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll() {
		const { ticking } = this.state;
		// update an animation before the next repaint with requestAnimationFrame
		if (!ticking) {
			window.requestAnimationFrame(() => {
				const scrolledHeight = document.body.scrollTop || document.documentElement.scrollTop || 0;
				this.setVisability(scrolledHeight);
				this.setState({ ticking: false });
			});
		}

		this.setState({ ticking: true });
	}

	setVisability(scrolledHeight) {
		// hide or show component so that the footer is visable
		if (this.elementBottom + 200 <= scrolledHeight) {
			this.element.classList.add('is-hidden');
		} else {
			this.element.classList.remove('is-hidden');
		}
	}

	render() {
		const {
			title,
			subtitle,
			video,
			image,
			onClickScrollButton,
			showGradient,
			isSmall,
			children,
		} = this.props;
		const childrenArray = React.Children.toArray(children);
		let parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
		let parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

		const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 };
		const style = {
			__html: `<style>
				.page-header {
					background-image: url('${setImageParams(image, {
						...imageParameters,
						w: 1000,
					})}');
				}
				@media (min-width: 768px) {
					.page-header {
						background-image: url('${setImageParams(image, {
							...imageParameters,
							w: 1500,
						})}');
					}
				}
				@media (min-width: 1170px) {
					.page-header {
						background-image: url('${setImageParams(image, {
							...imageParameters,
							w: 2000,
						})}');
					}
				}
				${video ? `@media (min-width: 768px) { .page-header { background-image: none; } }` : ''}
			}
			</style>`,
		};

		return (
			<section
				ref={node => (this.element = node)}
				className={`page-header
					${showGradient ? 'show-gradient' : ''}
					${isSmall ? 'page-header-small' : ''}
					${this.state.showVideo ? 'show-video' : ''}`}
			>
				{parallaxLayerBack}
				{video && (
					<video
						ref={node => (this.video = node)}
						src={video}
						className="page-header-video"
						playsInline
						autoPlay
						muted
						loop
					/>
				)}

				<div className="page-header-inner container">
					<div ref={node => (this.parallaxLayer = node)}>
						{onClickScrollButton ? (
							<a className="page-header-title-link" href="#" onClick={onClickScrollButton}>
								<h1 className="page-header-title ">{title}</h1>
							</a>
						) : (
							<h1 className="page-header-title ">{title}</h1>
						)}

						{subtitle && onClickScrollButton ? (
							<a className="page-header-subtitle-link" href="#" onClick={onClickScrollButton}>
								<p className="page-header-subtitle">{subtitle}</p>
							</a>
						) : (
							<p className="page-header-subtitle">{subtitle}</p>
						)}

						{onClickScrollButton && (
							<button
								className="page-header-button"
								onClick={onClickScrollButton ? onClickScrollButton : null}
							>
								<Icon icon="arrowDownCircle" />
							</button>
						)}
					</div>
				</div>
				<div dangerouslySetInnerHTML={style} />
				{parallaxLayerFront}
			</section>
		);
	}
}

PageHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	video: PropTypes.string,
	image: PropTypes.string,
	onClickScrollButton: PropTypes.func,
	showGradient: PropTypes.bool,
	isSmall: PropTypes.bool,
	children: PropTypes.node,
};

export default PageHeader;
