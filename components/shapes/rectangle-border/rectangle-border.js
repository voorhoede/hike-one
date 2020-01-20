import PropTypes from 'prop-types';

const RectangleBorder = ({ color = '', classes = '' }) => (
	<svg
		className={`${color} ${classes} shape-rectangle-border`}
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="17"
		viewBox="0 0 17 17"
	>
		<rect
			width="14"
			height="14.017"
			x="131.013"
			y="181.987"
			fill="none"
			fillRule="evenodd"
			stroke="#8415BC"
			strokeWidth="2"
			rx="4"
			transform="rotate(90 163.013 33.996)"
		/>
	</svg>
);

RectangleBorder.propTypes = {
	color: PropTypes.string,
	classes: PropTypes.string,
};

export default RectangleBorder;
