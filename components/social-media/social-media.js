import Link  from 'next/link';

import Facebook   from '../icons/facebook/facebook';
import Twitter 	  from '../icons/twitter/twitter';
import Instagram  from '../icons/instagram/instagram';
import LinkedIn   from '../icons/linkedin/linkedin';
import Medium 	  from '../icons/medium/medium';

const SocialMedia = () => {
	return (
		<div className="menu-social">
			<Link href="#"><a><Facebook /></a></Link>
			<Link href="#"><a><Twitter /></a></Link>
			<Link href="#"><a><Instagram /></a></Link>
			<Link href="#"><a><LinkedIn /></a></Link>
			<Link href="#"><a><Medium /></a></Link>
		</div>
	);
};

export default SocialMedia;
