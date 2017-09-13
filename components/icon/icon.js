import ArrowDown from '../icons/arrow-down';
import ArrowDownCircle from '../icons/arrow-down-circle';
import ArrowRightCircle from '../icons/arrow-right-circle';
import ArrowRight from '../icons/arrow-right';
import ArrowLeft from '../icons/arrow-left';
import Dribble from '../icons/dribble';
import FaceBook from '../icons/facebook-circle';
import Instagram from '../icons/instagram-circle';
import Linkedin from '../icons/linkedin-circle';
import Location from '../icons/location';
import Medium from '../icons/medium-circle';
import Twitter from '../icons/twitter';
import TwitterCircle from '../icons/twitter-circle';
import Triangle from '../icons/triangle';

const Icon = ({icon = 'arrowDown', classes = ''}) => {
	const icons = {
		arrowDown: <ArrowDown />,
		arrowDownCircle: <ArrowDownCircle />,
		arrowRightCircle: <ArrowRightCircle />,
		arrowRight: <ArrowRight/>,
		arrowLeft: <ArrowLeft/>,
		dribble: <Dribble/>,
		faceBook: <FaceBook/>,
		instagram: <Instagram/>,
		linkedin: <Linkedin/>,
		location: <Location/>,
		medium: <Medium/>,
		twitter: <Twitter/>,
		twitterCircle: <TwitterCircle/>,
		triangle: <Triangle />
	};

	return (<span className={classes}>{icons[icon]}</span>);
};

export default Icon;
