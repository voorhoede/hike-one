import React from 'react'
import setImageParams from '../_helpers/setImageParameters';

const fullWidthImageSmall = ({image = '#', index = 0}) => {
	const imageParameters = { fm: 'pjpg', q: 85 };
	const imageSmall = setImageParams(image, {...imageParameters, w: 500});
	const imageMedium = setImageParams(image, {...imageParameters, w: 1000});
	const imageLarge = setImageParams(image, {...imageParameters, w: 1920});

	const style ={__html:
		`<style>
				.full-width-image-small-${index} {
					background-image: url(${imageSmall});
				}
				
			@media only screen and (min-width: 500px) {
				.full-width-image-small-${index} {
					background-image: url(${imageMedium});
				}
			}
			
			@media only screen and (min-width: 1170px) {
				.full-width-image-small-${index} {
					background-image: url(${imageLarge});
				}
			}
		</style>`};

	return (
		<div>
			<div dangerouslySetInnerHTML={style}></div>
			<div className={`full-width-image-small full-width-image-small-${index}`}></div>
		</div>
	);
};

export default fullWidthImageSmall;
