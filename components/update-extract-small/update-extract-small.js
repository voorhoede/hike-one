import getContrastYIQ from '../_helpers/getContrastYIQ';

const updateExtractSmall = ({title='', date='', author='', image='', color='', target='', index}) => {
	const imageSmallScreen = `${image}&fm=jpg&q=90&w=737`;
	const imageLargeScreen = `${image}&fm=jpg&q=90&h=332`;

	const style ={__html:
		`<style>
			.update-extract-small-image-${index} {
				background-image: url(${imageSmallScreen});
			}
			
			@media only screen and (min-width: 768px) {
				.update-extract-small-image-${index} {
					background-image: url(${imageLargeScreen});
				}
			}			
		</style>`};

	return (
		<a href={target} target="_blank" className={`update-extract-small
			${ getContrastYIQ(color) === 'black' ? 'update-extract-small-text-dark' : '' }`}>
			<div className={`update-extract-small-image-${index} update-extract-small-image`}></div>
			<div className="update-extract-small-text" style={{backgroundColor: color}}>
				<div className="update-extract-small-type" style={{color: color}}>update</div>
				<h2 className="update-extract-small-title">{title}</h2>
				<span className="update-extract-small-subtitle">{date} - {author}</span>
			</div>

			<div dangerouslySetInnerHTML={style}></div>
		</a>
	);
};

export default updateExtractSmall;
