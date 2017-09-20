import setImageParams from '../_helpers/setImageParameters';

const inlineImage= ({image = '#', caption = null, large = false}) => {
	const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 }

	return (
		<div className={`inline-image ${large ? 'inline-image-large' : ''}`}>
			<div className={`inline-image-container ${large ? 'inline-image-container-large': ''}`}>
				<img
				srcSet={`
					${setImageParams(image, {...imageParameters, w: 445, h:350} )} 768w,
					${setImageParams(image, {...imageParameters, w: 738, h:400} )} 1024w,
					${setImageParams(image, {...imageParameters, w: 821, h:500} )} 1190w,
					${setImageParams(image, {...imageParameters, w: 1100, h:650} )} 1440w,
				`}
				sizes={`
					(max-width: 320px) calc(100vw - 30px),
					(max-width: 768px) calc(100vw - 30px),
					(max-width: 1024px) 790px,
					821px"`}
				alt=""
				src={image}/>
			</div>
			{caption && <p>{ caption }</p>}
		</div>
	)
};

export default inlineImage;

