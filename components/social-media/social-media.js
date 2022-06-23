import Facebook from '../icons/facebook-circle';
import Twitter from '../icons/twitter-circle';
import LinkedIn from '../icons/linkedin-circle';
import Medium from '../icons/medium-circle';
import Instagram from '../icons/instagram-circle';

const SocialMedia = () => (
	<div className="menu-social">
		<a
			href="https://www.facebook.com/HikeOne/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Facebook"
		>
			<Facebook />
		</a>
		<a
			href="https://twitter.com/realhikeone"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Twitter"
		>
			<Twitter />
		</a>
		<a
			href="https://www.linkedin.com/company/356831/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="LinkedIn"
		>
			<LinkedIn />
		</a>
		<a
			href="https://medium.com/@HikeOne"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Medium"
		>
			<Medium />
		</a>
		<a
			href="https://www.instagram.com/hike.one/"
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Instagram"
		>
			<Instagram />
		</a>
	</div>
);

export default SocialMedia;
