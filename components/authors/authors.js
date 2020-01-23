import PropTypes from 'prop-types';

const Authors = ({ authors = [] }) => <span>{authors.map(author => author.name).join(', ')}</span>;

Authors.propTypes = {
	authors: PropTypes.array,
};

export default Authors;
