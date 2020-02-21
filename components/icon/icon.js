import PropTypes from 'prop-types';
import ArrowDown from '../icons/arrow-down';
import ArrowDownCircle from '../icons/arrow-down-circle';
import ArrowLeft from '../icons/arrow-left';
import ArrowRightCircle from '../icons/arrow-right-circle';
import ArrowRight from '../icons/arrow-right';
import ArrowUp from '../icons/arrow-up';
import Dribble from '../icons/dribble';
import FaceBook from '../icons/facebook-circle';
import Instagram from '../icons/instagram-circle';
import Linkedin from '../icons/linkedin-circle';
import LinkedinNoCircle from '../icons/linkedin';
import Location from '../icons/location';
import Medium from '../icons/medium-circle';
import Twitter from '../icons/twitter';
import TwitterCircle from '../icons/twitter-circle';
import Triangle from '../icons/triangle';
import Spinner from '../icons/spinner';

const Icon = ({ icon = 'arrowDown' }) => {
	const icons = {
		arrowDown: <ArrowDown />,
		arrowDownCircle: <ArrowDownCircle />,
		arrowLeft: <ArrowLeft />,
		arrowRightCircle: <ArrowRightCircle />,
		arrowRight: <ArrowRight />,
		arrowUp: <ArrowUp />,
		dribble: <Dribble />,
		faceBook: <FaceBook />,
		instagram: <Instagram />,
		linkedin: <Linkedin />,
		linkedinNoCircle: <LinkedinNoCircle />,
		location: <Location />,
		medium: <Medium />,
		twitter: <Twitter />,
		twitterCircle: <TwitterCircle />,
		triangle: <Triangle />,
		spinner: <Spinner />,
	};

	return <span className="icon">{icons[icon]}</span>;
};

Icon.propTypes = {
	icon: PropTypes.string,
};

export default Icon;
