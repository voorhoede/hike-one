import React from 'react';
import PropTypes from 'prop-types';
import Facebook from '../icons/facebook-circle';
import LinkedIn from '../icons/linkedin-circle';
import Twitter from '../icons/twitter-circle';

const facebookBase = 'https://www.facebook.com/sharer.php';
const linkedinBase = 'https://www.linkedin.com/shareArticle';
const twitterBase = 'https://twitter.com/intent/tweet';

const SocialShare = ({ description = '', title = '', url = '' }) => (
	<div className="social-share">
		<a
			href={`${facebookBase}?u=${url}`}
			className="social-share-item"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Facebook color="facebook-blue" />
		</a>
		<a
			href={`${twitterBase}?text=${title}&url=${url}`}
			className="social-share-item"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Twitter color="twitter-blue" />
		</a>
		<a
			href={`${linkedinBase}?mini=true&url=${url}&title=${title}&summary=${description}&source=Hike&20One`}
			className="social-share-item"
			target="_blank"
			rel="noopener noreferrer"
		>
			<LinkedIn color="linkedin-blue" />
		</a>
	</div>
);

SocialShare.propTypes = {
	description: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
};

export default SocialShare;
