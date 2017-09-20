import setImageParams from '../_helpers/setImageParameters';

const fullWidthImageSmall = ({image = '#'}) => {
	const imageParameters = { fit: 'max', fm: 'jpg', q: 85 };
	return (
		<div className="full-width-image-small">
			<img
				srcSet={`
					${setImageParams(image, {...imageParameters, w: 445} )} 445w,
					${setImageParams(image, {...imageParameters, w: 821} )} 821w,
					${setImageParams(image, {...imageParameters, w: 1100} )} 1100w,
					${setImageParams(image, {...imageParameters, w: 1400} )} 1400w,
					${setImageParams(image, {...imageParameters, w: 1920} )} 1920w`}
				alt=""
				src={`${image}`} />
		</div>
	)
};

export default fullWidthImageSmall;
