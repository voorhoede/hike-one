
import React from 'react';

const ImageComposition = ({children, TeamImage2_1, TeamImage3_4, Person}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	
	return (
		<div className="image-composition clearfix">
			{parallaxLayerBack}
			<div className="teamimage-container-large teamimage-container-spaced teamimage-container-align-left">
				<img srcSet={`
					${TeamImage2_1.photo.url}&auto=format&q=90&w=375 375w,
					${TeamImage2_1.photo.url}&auto=format&q=90&w=480 480w
				`} sizes={`
					(max-width: 1100px) calc(50vw - 40px)
				`} src={`${TeamImage2_1.photo.url}&auto=format&q=90&w=452`}  alt="" className="teamimage-container-image" />
				<span className="teamimage-container-text-title">
					{TeamImage2_1.title}
				</span>
			</div>
			<div className="teamimage-container-large teamimage-container-align-left">
				<img srcSet={`
					${TeamImage3_4.photo.url}&auto=format&q=90&w=375 375w,
					${TeamImage3_4.photo.url}&auto=format&q=90&w=480 480w
				`} sizes={`
					(max-width: 1100px) 50vw
				`} src={`${TeamImage3_4.photo.url}&auto=format&q=90&w=452`} alt="" className="teamimage-container-image" />
				<span className="teamimage-container-text-title">
					{TeamImage3_4.title}
				</span>
			</div>
			<div className="teamimage-container-person">
				<div className="transition-transform-start transition-normal-transform">
					<img srcSet={`
						${Person.photo.url}&auto=format&q=90&w=375 375w,
						${Person.photo.url}&auto=format&q=90&w=480 480w
					`} sizes={`
						(max-width: 1100px) 50vw
					`} src={`${Person.photo.url}&auto=format&q=90&w=375`} alt="" 
						className="teamimage-container-person-image" />
					<div className="teamimage-person-container-text transition-normal-opacity">
						<span className="teamimage-person-container-title">
							{Person.name}
						</span>
						<span className="teamimage-person-container-subtitle">
							{Person.role}
						</span>
					</div>
				</div>	
			</div>
			{parallaxLayerFront}
		</div>
	)
};

export default ImageComposition;