import PropTypes from 'prop-types';

const LinkedinCircle = ({ color = '' }) => (
	<svg
		className={`${color}`}
		xmlns="http://www.w3.org/2000/svg"
		width="80"
		height="80"
		viewBox="0 0 80 80"
	>
		<path d="M40,11A29,29,0,1,0,69,40,29,29,0,0,0,40,11ZM32.23,51.62H26.1V33.23h6.12ZM29.16,30.73h0a3.16,3.16,0,0,1-3.38-3.17,3.19,3.19,0,0,1,3.45-3.17,3.18,3.18,0,1,1,0,6.35ZM54.25,51.62H48.14V41.79c0-2.47-.89-4.16-3.1-4.16a3.34,3.34,0,0,0-3.14,2.23,4.59,4.59,0,0,0-.21,1.5V51.62H35.6c.08-16.66,0-18.39,0-18.39h6.11v2.62a6,6,0,0,1,5.51-3c4,0,7,2.63,7,8.27Z" />
	</svg>
);

LinkedinCircle.propTypes = {
	color: PropTypes.string,
};

export default LinkedinCircle;
