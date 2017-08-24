
import React from 'react';
import Icon from '../icon/icon';

const ImageCompositionLarge = ({children, TeamImage3_4, Person, listValues}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');

	return (
		<div className="image-composition image-composition-large clearfix">
			{parallaxLayerBack}
			<div className="image-team">
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
					`} src={`${TeamImage3_4.photo.url}&auto=format&fm=jpg&q=90&w=453`} alt=""
						 className="image-team-img" />
					<span className="image-team-title">
						{TeamImage3_4.title}
					</span>
				</div>
				<div className="image-person">
					<img srcSet={`
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=165 165w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=329 329w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=660 660w
					`} sizes={`
						(max-width: 768px) calc(50vw - 30px),
						(max-width: 1024px) calc(50vw - 80px),
						329px
					`} src={`${Person.photo.url}&auto=format&fm=jpg&q=90&w=329`} alt=""
						className="image-person-img" />
					<div className="image-person-text">
						<span className="image-person-title">
							{Person.name}
						</span>
						<span className="image-person-subtitle">
							{Person.role}
						</span>
					</div>
				</div>
				<div className="image-person">
					<img srcSet={`
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=165 165w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=329 329w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=660 660w
					`} sizes={`
						(max-width: 768px) calc(50vw - 30px),
						(max-width: 1024px) calc(50vw - 80px),
						329px
					`} src={`${Person.photo.url}&auto=format&fm=jpg&q=90&w=329`} alt=""
						className="image-person-img" />
					<div className="image-person-text">
						<span className="image-person-title">
							{Person.name}
						</span>
						<span className="image-person-subtitle">
							{Person.role}
						</span>
					</div>
				</div>
				<div className="image-person">
					<img srcSet={`
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=165 165w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=329 329w,
						${Person.photo.url}&auto=format&fm=jpg&q=90&w=660 660w
					`} sizes={`
						(max-width: 768px) calc(50vw - 30px),
						(max-width: 1024px) calc(50vw - 80px),
						329px
					`} src={`${Person.photo.url}&auto=format&fm=jpg&q=90&w=329`} alt=""
						className="image-person-img" />
					<div className="image-person-text">
						<span className="image-person-title">
							{Person.name}
						</span>
						<span className="image-person-subtitle">
							{Person.role}
						</span>
					</div>
				</div>
				<div className="image-composition-text">
					<h3 className="image-composition-text-title">{listValues.title}</h3>
					<ul className="image-composition-text-list">
						{  listValues.values.map((item, index) => (
							<li key={index} className="image-composition-text-list-item">
								<span className="image-composition-text-list-icon">
									<Icon icon="triangle"/>
								</span>
								<span className="image-composition-text-list-text">
									{item}
								</span>
							</li>
						))}
					</ul>
				</div>
			{parallaxLayerFront}
		</div>
	)
};

export default ImageCompositionLarge;
