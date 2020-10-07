import PropTypes from 'prop-types';
import setImageParams from '../_helpers/setImageParameters';

const imageParams = { fit: 'crop' };

const Author = ({ name = '', roles = '', photoUrl = '', summary = '' }) => (
	<div className="author">
		<img
			className="author-image"
			src={`${setImageParams(photoUrl, { ...imageParams, w: 92, h: 123 })}`}
		/>
		<div className="author-text">
			<p className="author-name">{name}</p>
			<p className="author-roles">{roles.map((role) => role.title).join(', ')}</p>
			<p className="author-summary">{summary}</p>
		</div>
	</div>
);

Author.propTypes = {
	name: PropTypes.string,
	roles: PropTypes.array,
	photoUrl: PropTypes.string,
	summary: PropTypes.string,
};

export default Author;
