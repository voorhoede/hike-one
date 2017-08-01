import React from 'react';
import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';
import ButtonTertiary from '../buttons/button-tertiary/button-tertiary';

const pageHeader = ({heroImage, title = '', subtitle = '', onClickScrollButton, children}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (
		<div className="home-intro container">
			{parallaxLayerBack}
			<div className="home-intro-overlay">
				<div className="container-inner home-intro-inner" style={{backgroundImage: `url(${heroImage})`}}>
					<h1 className="home-intro-heading content">{title}</h1>

					<ButtonTertiary classes="content" value={subtitle}
									onClick={onClickScrollButton ? onClickScrollButton : null}>
						<ArrowDownTriple  />
					</ButtonTertiary>
				</div>
			</div>
			{parallaxLayerFront}
		</div>
	);
};

export default pageHeader;
