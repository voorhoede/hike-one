import PropTypes from 'prop-types';

const RichBodyText = ({ content = '', textCenter = false }) => (
	<div
		className={`rich-body-text ${textCenter ? 'text-center' : ''}`}
		dangerouslySetInnerHTML={{ __html: content }}
	/>
);

RichBodyText.propTypes = {
	content: PropTypes.string,
	textCenter: PropTypes.bool,
};

export default RichBodyText;
