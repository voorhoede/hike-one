import React from 'react';
import Icon from '../icon/icon';

const pageHeader = ({heroImage, title = '', subtitle = '', onClickScrollButton, children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	const heroImageSmall = `${heroImage}?auto=format&lossless=0&&w=768`;
	const heroImageMedium = `${heroImage}?auto=format&lossless=0&w=1170`;
	const heroImageLarge = `${heroImage}?auto=format&lossless=0&w=1244`;

	const style ={__html:
		`<style>
			.home-intro-inner {
				background-image: url(${heroImageSmall});
			}
			@media only screen and (min-width: 768px) {
				.home-intro-inner {
					background-image: url(${heroImageMedium});
				}
			}
			@media only screen and (min-width: 1170px) {
				.home-intro-inner {
					background-image: url(${heroImageLarge});
				}
			}
		</style>`};


	return (
		<div className="home-intro container">
			{parallaxLayerBack}
			<div className="home-intro-overlay">
				<div className="container-inner home-intro-inner">
					<h1 className="home-intro-heading content">{title}</h1>

					<button className="page-header-button content"
							onClick={onClickScrollButton ? onClickScrollButton : null} >
						<span className="page-header-button-text">{subtitle}</span>
						<span className="icon">
							<Icon icon="arrowDownCircle" />
						</span>
					</button>
				</div>
			</div>
			{parallaxLayerFront}


			<div dangerouslySetInnerHTML={style} />
		</div>
	);
};

export default pageHeader;
