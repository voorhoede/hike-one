import ArrowDown from '../icons/arrow-down/arrow-down';
import ArrowDownTriple from '../icons/arrow-down-triple/arrow-down-triple';
import ArrowRight from '../icons/arrow-right/arrow-right';
import FaceBook from '../icons/facebook/facebook';
import Instagram from '../icons/instagram/instagram';
import Linkedin from '../icons/linkedin/linkedin';
import Medium from '../icons/medium/medium';
import Twitter from '../icons/twitter/twitter';

const Icon = ({icon = 'arrowDown'}) => {
	const icons = {
		arrowDown: <ArrowDown />,
		arrowDownTriple: <ArrowDownTriple />,
		arrowRight: <ArrowRight/>,
		faceBook: <FaceBook/>,
		instagram: <Instagram/>,
		linkedin: <Linkedin/>,
		medium: <Medium/>,
		twitter: <Twitter/>
	};

	return (icons[icon]);
};

export default Icon;
