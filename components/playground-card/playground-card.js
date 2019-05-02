import React from 'react'
import setImageParams from '../_helpers/setImageParameters';
import Icon from '../icon/icon';
import Link from 'next/link';


const PlaygroundCard = ({category, classes='', index}) => {
	const { title, body, backgroundImage, color, overview } = category;

	const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 };

	const style ={__html:
		`<style>
			.playground-card-image-${index} {
				background-image: url("${setImageParams(backgroundImage.url, { ...imageParameters, w: 275, h:240 })}");
			}

			@media only screen and (min-width: 768px) {
				.playground-card-image-${index} {
					background-image: url("${setImageParams(backgroundImage.url, { ...imageParameters, w: 350, h:240 })}");
				}
			}
			@media only screen and (min-width: 1170px) {
				.playground-card-image-${index} {
					background-image: url("${setImageParams(backgroundImage.url, { ...imageParameters, w: 700, h:450 })}");
				}
			}
		</style>`};

	return (
		<article className={`playground-card ${classes}`}>
			<div dangerouslySetInnerHTML={style}></div>
			<Link href={`/playground/${overview.slug}`}>
				<div>
					<div className={`playground-card-image-${index} playground-card-image`}></div>
					<div className="playground-card-content" style={{ backgroundColor: color.hex }}>
						<h3 className="playground-card-title">{ title }</h3>
						<p className="playground-card-body">{ body }</p>
						<div className="playground-card-button">
							<Icon icon="arrowRightCircle"/>
						</div>
					</div>
				</div>
			</Link>
		</article>
	)
};

export default PlaygroundCard;
