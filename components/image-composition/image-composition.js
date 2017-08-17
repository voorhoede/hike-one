
import React from 'react';

const ImageComposition = ({children, TeamImage2_1, TeamImage3_4, Person}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	
	return (
		<div className="image-composition">
			{parallaxLayerBack}
			<div className="teamimage-large-align-left teamimage-large-padded">
				<img srcSet={`
					${TeamImage2_1.photo.url}&auto=format&q=90&w=165 375w,
					${TeamImage2_1.photo.url}&auto=format&q=90&w=452 480w
				`} sizes={`
					(max-width: 375px) 165px, 452px
				`} src={`${TeamImage2_1.photo.url}&auto=format&q=90&w=165`}  alt="" className="teamimage-large-image" />
				<span className="teamimage-large-title">
					{TeamImage2_1.title}
				</span>
			</div>
			<div className="teamimage-normal-align-left ">
				<img srcSet={`
					${TeamImage3_4.photo.url}&auto=format&q=90&w=165 375w,
					${TeamImage3_4.photo.url}&auto=format&q=90&w=452 480w
				`} sizes={`
					(max-width: 375px) 165px, 452px
				`} src={`${TeamImage3_4.photo.url}&auto=format&q=90&w=165`} alt="" className="teamimage-normal-image" />
				<span className="teamimage-normal-title">
					{TeamImage3_4.title}
				</span>
			</div>
			<div className="person">
				<img srcSet={`
					${Person.photo.url}&auto=format&q=90&w=165 375w,
					${Person.photo.url}&auto=format&q=90&w=362 480w
				`} sizes={`
					(max-width: 375px) 165px, 375px
				`} src={`${Person.photo.url}&auto=format&q=90&w=165`} alt="" className="person-image" />
				<div className="person-text">
					<span className="person-title">
						{Person.name}
					</span>
					<span className="person-subtitle">
						{Person.role}
					</span>
				</div>
			</div>
			{parallaxLayerFront}
		</div>
	)
};

export default ImageComposition;