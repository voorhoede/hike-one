import PropTypes from 'prop-types';

const UpdateLinks = ({ children }) => (
	<div className="update-links container clearfix">{children}</div>
);

UpdateLinks.propTypes = {
	children: PropTypes.node,
};

export default UpdateLinks;
