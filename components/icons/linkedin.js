import PropTypes from 'prop-types';

const Linkedin = ({ color = '' }) => (
	<svg
		className={`${color}`}
		xmlns="http://www.w3.org/2000/svg"
		width="80"
		height="80"
		viewBox="0 0 80 80"
	>
		<path d="M80 47.9v29.6H62.9V49.8c0-6.9-2.5-11.7-8.7-11.7-4.7 0-7.6 3.2-8.8 6.3-.5 1.1-.6 2.6-.6 4.2v28.8H27.6s.2-46.7 0-51.6h17.2v7.3c0 .1-.1.1-.1.2h.1v-.2c2.3-3.5 6.3-8.5 15.5-8.5C71.5 24.7 80 32 80 47.9zM9.7 1C3.8 1 0 4.8 0 9.9c0 5 3.7 8.9 9.5 8.9h.1c6 0 9.7-4 9.7-8.9C19.2 4.8 15.6 1 9.7 1zM1 77.4h17.1V25.9H1v51.5z" />
	</svg>
);

Linkedin.propTypes = {
	color: PropTypes.string,
};

export default Linkedin;
