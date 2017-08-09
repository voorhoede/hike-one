import Link  from 'next/link';

import Facebook   from '../icons/facebook-circle';
import Twitter 	  from '../icons/twitter-circle';
import Instagram  from '../icons/instagram-circle';
import LinkedIn   from '../icons/linkedin-circle';
import Medium 	  from '../icons/medium-circle';

const SocialMedia = () => (
	<div className="menu-social">
		<Link href="#"><a><Facebook /></a></Link>
		<Link href="#"><a><Twitter /></a></Link>
		<Link href="#"><a><Instagram /></a></Link>
		<Link href="#"><a><LinkedIn /></a></Link>
		<Link href="#"><a><Medium /></a></Link>
	</div>
);


export default SocialMedia;
