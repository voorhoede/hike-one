import React from 'react';
import setImageParams from '../_helpers/setImageParameters';

const FullWidthImageStatic = ({image = '#', index = 0}) => {
	const imageParameters = { fm: 'pjpg', q: 85 };
	const imageStaticSmall = setImageParams(image, {...imageParameters, w: 500});
	const imageStaticMedium = setImageParams(image, {...imageParameters, w: 1000});
	const imageStaticLarge = setImageParams(image, {...imageParameters, w: 1920});

	const style = {__html:
		`<style>
			.full-width-image-static-${index} {
				background-image: url(${imageStaticSmall});
			}

		@media only screen and (min-width: 500px) {
			.full-width-image-static-${index} {
				background-image: url(${imageStaticMedium});
			}
		}

		@media only screen and (min-width: 1170px) {
			.full-width-image-static-${index} {
				background-image: url(${imageStaticLarge});
			}
		}
		</style>`
	}

	return(
		<div className="container">
			<div dangerouslySetInnerHTML={style}></div>
			<div className={`full-width-image-static full-width-image-static-${index}`}></div>
		</div>
	)
};

export default FullWidthImageStatic;
