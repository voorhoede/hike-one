import setImageParams from '../_helpers/setImageParameters';

const inlineImage= ({image = null, caption = null, large = false, video = '', videoControls = false}) => {
	const imageParameters = { fit: 'max', fm: 'pjpg', q: 85 }

	return (
		<div className={`inline-image ${large ? 'inline-image-large' : ''}`}>
			<div className={`inline-image-container ${large ? 'inline-image-container-large': ''}`}>
				{ video && videoControls &&
					<video src={`${video}`} controls></video>
				}
				{ video && !videoControls &&
					<video src={`${video}`} autoPlay muted loop playsInline></video>
				}
				{ image &&
					<img
					srcSet={`
						${setImageParams(image, {...imageParameters, w: 800, h:600 } )} 768w,
						${setImageParams(image, {...imageParameters, w: 900, h:768 } )} 1024w,
						${setImageParams(image, {...imageParameters, w: 1000, h:850 } )} 1190w,
						${setImageParams(image, {...imageParameters, w: 1200, h:950 } )} 1440w
					`}
					sizes={`
						(max-width: 320px) calc(100vw - 30px),
						(max-width: 768px) calc(100vw - 30px),
						(max-width: 1024px) 790px,
						821px"`}
					alt=""
					src={image}/>
				}
			</div>
			{caption && <p>{ caption }</p>}
		</div>
	);
};

export default inlineImage;

