
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
					${TeamImage2_1.photo.url}&auto=format&q=90&w=320 320w,
					${TeamImage2_1.photo.url}&auto=format&q=90&w=375 375w,
					${TeamImage2_1.photo.url}&auto=format&q=90&w=453 453w
				`} sizes={`
					(max-width: 768px) calc(50vw - 30px),
					(max-width: 1024px) calc(50vw - 80px),
					453px
				`} src={`${TeamImage2_1.photo.url}&auto=format&q=90&w=453`}  alt="" className="teamimage-container-image" />
				<span className="teamimage-container-text-title">
					{TeamImage2_1.title}
				</span>
			</div>
			<div className="teamimage-container-large teamimage-container-align-left">
				<img srcSet={`
					${TeamImage3_4.photo.url}&auto=format&q=90&w=320 320w,
					${TeamImage3_4.photo.url}&auto=format&q=90&w=375 375w,
					${TeamImage3_4.photo.url}&auto=format&q=90&w=453 453w
				`} sizes={`
					(max-width: 768px) calc(50vw - 30px),
					(max-width: 1024px) calc(50vw - 80px),
					453px
				`} src={`${TeamImage3_4.photo.url}&auto=format&q=90&w=453`} alt="" className="teamimage-container-image" />
				<span className="teamimage-container-text-title">
					{TeamImage3_4.title}
				</span>
			</div>
			<div className="teamimage-container-person">
				<div className="transition-transform-start transition-normal-transform">
					<img srcSet={`
						${Person.photo.url}&auto=format&q=90&w=165 165w,
						${Person.photo.url}&auto=format&q=90&w=329 329w						
					`} sizes={`
						(max-width: 768px) calc(50vw - 30px),
						(max-width: 1024px) calc(50vw - 80px),
						329px
					`} src={`${Person.photo.url}&auto=format&q=90&w=329`} alt="" 
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