import React from 'react';
import Icon from '../icon/icon';
import setImageParams from '../_helpers/setImageParameters';

const pageHeader = ({heroImage, title = '', subtitle = '', onClickScrollButton, children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	const imageParameters = { fit: 'max', fm: 'jpg', q: 90 }
			
	const heroImageSmall = `${setImageParams(heroImage, {...imageParameters, w: 768} )}`;
	const heroImageMedium = `${setImageParams(heroImage, {...imageParameters, w: 1170} )}`;
	const heroImageLarge = `${setImageParams(heroImage, {...imageParameters, w: 1244} )}`;

	const style ={__html:
		`<style>
			.page-header-inner {
				background-image: url(${heroImageSmall});
			}
			@media only screen and (min-width: 768px) {
				.page-header-inner {
					background-image: url(${heroImageMedium});
				}
			}
			@media only screen and (min-width: 1170px) {
				.page-header-inner {
					background-image: url(${heroImageLarge});
				}
			}
		</style>`};


	return (
		<div className="page-header container">
			{parallaxLayerBack}
			<div className="page-header-overlay">
				<div className="container-inner page-header-inner">
					<h1 className="page-header-heading content">{title}</h1>

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
