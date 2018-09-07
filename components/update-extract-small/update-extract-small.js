import getDateFormat from '../_helpers/getDateFormat';
import setImageParams from '../_helpers/setImageParameters';
import Authors from '../authors/authors';

const updateExtractSmall = ({classes='', title='', date='', authors=[], image='', color='', target='', index, category = 'update', external = false}) => {
	const imageParameters = { fit: 'crop', fm: 'pjpg', q: 85 };

	const style ={__html:
		`<style>
			.update-extract-small-image-${index} {
				background-image: url("${setImageParams(image, { ...imageParameters, w: 550, h:200 })}");
			}
			
			@media only screen and (min-width: 768px) {
				.update-extract-small-image-${index} {
					background-image: url("${setImageParams(image, { ...imageParameters, w: 470, h:332 })}");
				}
			}		
			
			@media only screen and (min-width: 1024px) {
				.update-extract-small-image-${index} {
					background-image: url("${setImageParams(image, { ...imageParameters, w: 337, h:366 })}");
				}
			}			
		</style>`};

	return (
		<a href={target} target={external ? '_blank': ''} className={`update-extract-small ${classes}`}>
			<div dangerouslySetInnerHTML={style}></div>
			<div className={`update-extract-small-image-${index} update-extract-small-image`}></div>
			<div className="update-extract-small-text" style={{backgroundColor: color}}>
				<div className="update-extract-small-type" style={{color: color}}>{category}</div>
				<h2 className="update-extract-small-title">{title}</h2>
				<span className="update-extract-small-subtitle" style={{backgroundColor: color}}>
				<Authors authors={authors} /> - {`${getDateFormat(date)}`}
				</span>
			</div>
		</a>
	);
};

export default updateExtractSmall;
