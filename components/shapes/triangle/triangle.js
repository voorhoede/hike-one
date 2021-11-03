import PropTypes from 'prop-types';

const Triangle = ({ color = '', classes = '' }) => (
	<svg
		className={`${color} ${classes} shape-triangle`}
		xmlns="http://www.w3.org/2000/svg"
		width="96"
		height="109"
		viewBox="0 0 96 109"
	>
		<path
			fillRule="evenodd"
			d="M2.502.064l91.42 23.673a2 2 0 0 1 1.205 2.98L45.803 107.28a2 2 0 0 1-3.56-.296L.146 2.75A2 2 0 0 1 2.502.064z"
		/>
	</svg>
);

Triangle.propTypes = {
	color: PropTypes.string,
	classes: PropTypes.string,
};

export default Triangle;
