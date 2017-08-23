
import React from 'react';
import TextBlock from '../text-block/text-block';

const ImageCompositionLarge = ({children, TeamImage3_4, Person, listValues}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (			
		<div className="image-composition image-composition-large clearfix">		
			{parallaxLayerBack}
			<div className="teamimage-large teamimage-align-left teamimage-spaced teamimage-large-fixed-height">
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
				<div className={`teamimage-person teamimage-person-small teamimage-spaced 
								teamimage-person-align-left`}>
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
					<div className={`teamimage-person teamimage-person-small teamimage-spaced 
								teamimage-person-align-left`}>
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
				</div><div className={`teamimage-person teamimage-person-small teamimage-spaced 
								teamimage-person-align-left teamimage-person-small-padded`}>
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
				<TextBlock
				color='purple'
				alignment='text-block-right'
				size='text-block-small'
				listValues={listValues} />
			{parallaxLayerFront}
		</div>
	)
};

export default ImageCompositionLarge;
