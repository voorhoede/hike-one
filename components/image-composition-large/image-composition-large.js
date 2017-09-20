
import React from 'react';
import Icon from '../icon/icon';
import setImageParams from '../_helpers/setImageParameters';

const ImageCompositionLarge = ({children, TeamImage3_4, Person1, Person2, Person3, listValues}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 }

	return (
		<div className="image-composition-large">
			{parallaxLayerBack}
			<div className="image-composition-large-inner">
				<div className="image-composition-img-1 image-team">
					{/*<img srcSet={`*/}
						{/*${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 320} )} 320w,*/}
						{/*${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 375} )} 375w,*/}
						{/*${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 453} )} 453w,*/}
						{/*${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 660} )} 660w,*/}
						{/*${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 906} )} 906w,*/}
					{/*`} sizes={`*/}
						{/*(max-width: 768px) calc(50vw - 30px),*/}
						{/*(max-width: 1024px) calc(50vw - 80px),*/}
						{/*453px*/}
					{/*`} src={`${setImageParams(TeamImage3_4.photo.url, {...imageParameters} )} `} alt=""*/}
						 {/*className="image-team-img" />*/}
					<img src={TeamImage3_4.photo.url} className="image-team-img" />
					<span className="image-team-title">
						{TeamImage3_4.title}
					</span>
				</div>
				<div className="image-composition-img-2 image-person">
					<div className="transition-img-hover">
						{/*<img srcSet={`*/}
							{/*${setImageParams(Person1.photo.url, {...imageParameters, w: 165} )} 165w,*/}
							{/*${setImageParams(Person1.photo.url, {...imageParameters, w: 329} )} 329w,*/}
							{/*${setImageParams(Person1.photo.url, {...imageParameters, w: 660} )} 660w,*/}
						{/*`} sizes={`*/}
							{/*(max-width: 768px) calc(50vw - 30px),*/}
							{/*(max-width: 1024px) calc(50vw - 80px),*/}
							{/*329px*/}
						{/*`} src={${setImageParams(Person1.photo.url, {...imageParameters, w: 329} )} 329w,} alt=""*/}
							 {/*className="image-person-img" />*/}

							 <img src={Person1.photo.url} className="image-person-img" />
 						<div className="image-person-text">
							<span className="image-person-title">
								{Person1.name}
							</span>
							<span className="image-person-subtitle">
								{Person1.role}
							</span>
						</div>
					</div>
				</div>
				<div className="image-composition-img-3 image-person">
					<div className="transition-img-hover">
						{/*<img srcSet={`*/}
							{/*${setImageParams(Person2.photo.url, {...imageParameters, w: 165} )} 165w,*/}
							{/*${setImageParams(Person2.photo.url, {...imageParameters, w: 329} )} 329w,*/}
							{/*${setImageParams(Person2.photo.url, {...imageParameters, w: 660} )} 660w*/}
						{/*`} sizes={`*/}
							{/*(max-width: 768px) calc(50vw - 30px),*/}
							{/*(max-width: 1024px) calc(50vw - 80px),*/}
							{/*329px*/}
						{/*`} src={`
								${setImageParams(Person2.photo.url, {...imageParameters, w: 329} )}
								alt=""*/}
							 {/*className="image-person-img" />*/}

						<img src={Person2.photo.url} className="image-person-img" />
						<div className="image-person-text">
							<span className="image-person-title">
								{Person2.name}
							</span>
							<span className="image-person-subtitle">
								{Person2.role}
							</span>
						</div>
					</div>
				</div>
				<div className="image-composition-img-4 image-person">
					<div className="transition-img-hover">
						{/*<img srcSet={`*/}
							{/*${setImageParams(Person3.photo.url, {...imageParameters, w: 165} )} 165w*/}
							{/*${setImageParams(Person3.photo.url, {...imageParameters, w: 329} )} 329w*/}
							{/*${setImageParams(Person3.photo.url, {...imageParameters, w: 660} )} 660w*/}
						{/*`} sizes={`*/}
							{/*(max-width: 768px) calc(50vw - 30px),*/}
							{/*(max-width: 1024px) calc(50vw - 80px),*/}
							{/*329px*/}
						{/*`} src={`${setImageParams(Person3.photo.url, {...imageParameters, w: 329} )}`} alt=""*/}
							 {/*className="image-person-img" />*/}

						<img src={Person3.photo.url} className="image-person-img" />
						<div className="image-person-text">
							<span className="image-person-title">
								{Person3.name}
							</span>
							<span className="image-person-subtitle">
								{Person3.role}
							</span>
						</div>
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
			</div>
			{parallaxLayerFront}
		</div>
	);
};

export default ImageCompositionLarge;
