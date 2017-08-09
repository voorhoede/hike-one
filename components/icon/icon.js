import ArrowDown from '../icons/arrow-down';
import ArrowDownCircle from '../icons/arrow-down-circle';
import ArrowRightCircle from '../icons/arrow-right-circle';
import ArrowRight from '../icons/arrow-right';
import FaceBook from '../icons/facebook-circle';
import Instagram from '../icons/instagram-circle';
import Linkedin from '../icons/linkedin-circle';
import Location from '../icons/location';
import Medium from '../icons/medium-circle';
import Twitter from '../icons/twitter-circle';

const Icon = ({icon = 'arrowDown'}) => {
	const icons = {
		arrowDown: <ArrowDown />,
		arrowDownCircle: <ArrowDownCircle />,
		arrowRightCircle: <ArrowRightCircle />,
		arrowRight: <ArrowRight/>,
		faceBook: <FaceBook/>,
		instagram: <Instagram/>,
		linkedin: <Linkedin/>,
		location: <Location/>,
		medium: <Medium/>,
		twitter: <Twitter/>
	};

	return (icons[icon]);
};

export default Icon;
