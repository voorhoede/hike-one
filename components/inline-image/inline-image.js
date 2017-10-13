import setImageParams from '../_helpers/setImageParameters';

const inlineImage= ({image = '#', caption = null, large = false, video = ''}) => {
	const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 }

	return (
		<div className={`inline-image ${large ? 'inline-image-large' : ''}`}>
			<div className={`inline-image-container ${large ? 'inline-image-container-large': ''}`}>
				{ video &&
					<video src={`${video}`} autoPlay muted loop playsInline></video>	
				}	
				{ image &&
					<img
					srcSet={`
						${setImageParams(image.url, {...imageParameters, w: 445, h:350} )} 768w,
						${setImageParams(image.url, {...imageParameters, w: 738, h:400} )} 1024w,
						${setImageParams(image.url, {...imageParameters, w: 821, h:500} )} 1190w,
						${setImageParams(image.url, {...imageParameters, w: 1100, h:650} )} 1440w,
					`}
					sizes={`
						(max-width: 320px) calc(100vw - 30px),
						(max-width: 768px) calc(100vw - 30px),
						(max-width: 1024px) 790px,
						821px"`}
					alt=""
					src={image.url}/>
				}
			</div>
			{caption && <p>{ caption }</p>}
		</div>
	)
};

export default inlineImage;

