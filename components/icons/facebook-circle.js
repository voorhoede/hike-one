import PropTypes from 'prop-types';

const FacebookCircle = ({ color = '' }) => (
	<svg
		className={`${color}`}
		xmlns="http://www.w3.org/2000/svg"
		width="80"
		height="80"
		viewBox="0 0 80 80"
	>
		<path d="M40,11A29,29,0,1,0,69,40,29,29,0,0,0,40,11Zm8.31,18.31h-3c-2.36,0-2.81,1.14-2.81,2.77v3.63h5.64l-.75,5.69H42.48V56H36.6V41.4h-4.9V35.71h4.9V31.52c0-4.87,3-7.52,7.33-7.52a37.6,37.6,0,0,1,4.39.23Z" />
	</svg>
);

FacebookCircle.propTypes = {
	color: PropTypes.string,
};

export default FacebookCircle;
