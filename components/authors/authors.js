import PropTypes from 'prop-types';

const Authors = ({ authors = [], staticAuthors = '' }) => (
	<span>
		{authors.length ? authors.map((author) => author.name).join(', ') : staticAuthors || 'Hike One'}
	</span>
);

Authors.propTypes = {
	authors: PropTypes.array,
	staticAuthors: PropTypes.string,
};

export default Authors;
