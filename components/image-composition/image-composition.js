
import React from 'react';

const ImageComposition = ({children, TeamImage2_1, TeamImage3_4, Person}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (
		<div className="image-composition clearfix">
			{parallaxLayerBack}
			<div className="teamimage-large teamimage-spaced teamimage-align-left">
				<img srcSet={`
					${TeamImage2_1.photo.url}&auto=format&fm=jpg&q=90&w=320 320w,
					${TeamImage2_1.photo.url}&auto=format&fm=jpg&q=90&w=375 375w,
					${TeamImage2_1.photo.url}&auto=format&fm=jpg&q=90&w=453 453w,
					${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=600 600w,
					${TeamImage2_1.photo.url}&auto=format&fm=jpg&q=90&w=906 906w
				`} sizes={`
					(max-width: 768px) calc(50vw - 30px),
					(max-width: 1024px) calc(50vw - 80px),
					453px
				`} src={`${TeamImage2_1.photo.url}&auto=format&fm=jpg&q=90&w=453`}  alt="" className="teamimage-image" />
				<span className="teamimage-text-title">
					{TeamImage2_1.title}
				</span>
			</div>
			<div className="teamimage-large teamimage-align-left">
				<img srcSet={`
					${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=320 320w,
					${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=375 375w,
					${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=453 453w,
					${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=600 600w,
					${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=906 906w
				`} sizes={`
					(max-width: 768px) calc(50vw - 30px),
					(max-width: 1024px) calc(50vw - 80px),
					453px
				`} src={`${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=453`} alt="" className="teamimage-image" />
				<span className="teamimage-text-title">
					{TeamImage3_4.title}
				</span>
			</div>
			<div className="teamimage-person">
				<div className="transition-img-hover">
					<img srcSet={`
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=165 165w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=329 329w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=660 660w
					`} sizes={`
						(max-width: 768px) calc(50vw - 30px),
						(max-width: 1024px) calc(50vw - 80px),
						329px
					`} src={`${Person.photo.url}&auto=format&fm=jpg&q=90&w=329`} alt=""
						className="teamimage-person-image" />
					<div className="teamimage-person-text transition-normal-opacity">
						<span className="teamimage-person-title">
							{Person.name}
						</span>
						<span className="teamimage-person-subtitle">
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
