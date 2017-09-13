import setImageParams from '../_helpers/setImageParameters';

const Author = ({name='', role='', photoUrl='', summary=''}) => {
	const imageParameters = { fit: 'crop', fm: 'jpg', q: 90 };	
	return (
		<div className="author">
			<img className="author-image"	
				src={`${setImageParams(photoUrl, {...imageParameters, w: 92, h: 123} )}`}/>	
			<div className="author-text">
				<p className="author-name">{name}</p>
				<p className="author-role">{role}</p>
				<p className="author-summary">{summary}</p>
			</div>
		</div>
	)
}

export default Author;