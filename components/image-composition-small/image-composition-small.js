
import React from 'react';
import setImageParams from '../_helpers/setImageParameters';

const ImageCompositionSmall = ({children, classes = '',TeamImage2_1, TeamImage3_4, Person}) => {
	const childrenArray = React.Children.toArray(children);
	const parallaxLayerFront = childrenArray.find(child => child.props.position === 'front');
	const parallaxLayerBack = childrenArray.find(child => child.props.position === 'back');
	const imageParameters = { fit: 'max', fm: 'jpg', q: 90 }

	return (
		<div className={`image-composition-small ${classes}`}>
			{parallaxLayerBack}
			<div className="image-composition-small-inner">
			<div className="image-composition-img-1 image-team">
				<img srcSet={`
					${setImageParams(TeamImage2_1.photo.url, {...imageParameters, w: 320} )} 320w,
					${setImageParams(TeamImage2_1.photo.url, {...imageParameters, w: 375} )} 375w,
					${setImageParams(TeamImage2_1.photo.url, {...imageParameters, w: 453} )} 453w,
					${setImageParams(TeamImage2_1.photo.url, {...imageParameters, w: 600} )} 600w,
					${setImageParams(TeamImage2_1.photo.url, {...imageParameters, w: 906} )} 906w
				`} sizes={`
					(max-width: 768px) calc(50vw - 30px),
					(max-width: 1024px) calc(50vw - 80px),
					453px
				`} src={`
				${setImageParams(TeamImage2_1.photo.url, {...imageParameters} )}`}
				  alt="" className="image-team-img" />
				<span className="image-team-title">
					{TeamImage2_1.title}
				</span>
			</div>
			<div className="image-composition-img-2 image-team">
				<img srcSet={`
					${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 320} )} 320w,
					${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 375} )} 375w,
					${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 453} )} 453w,
					${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 600} )} 600w,
					${setImageParams(TeamImage3_4.photo.url, {...imageParameters, w: 906} )} 906w
				`} sizes={`
					(max-width: 768px) calc(50vw - 30px),
					(max-width: 1024px) calc(50vw - 80px),
					453px
				`} src={`${setImageParams(TeamImage3_4.photo.url, {...imageParameters} )}`} alt="" className="image-team-img" />
				<span className="image-team-title">
					{TeamImage3_4.title}
				</span>
			</div>
			<div className="image-composition-img-3 image-person">
				<div className="transition-img-hover">
					{/*<img srcSet={`*/}
						{/*${setImageParams(Person.photo.url, {...imageParameters, w: 165} )} 165w,*/}
						{/*${setImageParams(Person.photo.url, {...imageParameters, w: 329} )} 329w,*/}
						{/*${setImageParams(Person.photo.url, {...imageParameters, w: 660} )} 660w,*/}
					{/*`} sizes={`*/}
						{/*(max-width: 768px) calc(50vw - 30px),*/}
						{/*(max-width: 1024px) calc(50vw - 80px),*/}
						{/*329px*/}
					{/*`} src={`${setImageParams(Person.photo.url, {...imageParameters})}`} alt=""*/}
						{/*className="image-person-img" />*/}

						<img src={Person.photo.url} className="image-person-img" />
					<div className="image-person-text">
						<span className="image-person-title">
							{Person.name}
						</span>
						<span className="image-person-subtitle">
							{Person.role}
						</span>
					</div>
				</div>
			</div>
			</div>
			{parallaxLayerFront}
		</div>
	)
};

export default ImageCompositionSmall;
