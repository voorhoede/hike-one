const SocialFeedLarge = ({ twitterImage }) => {
	return (
		<div className="social-feed-large"> 
			<div className="social-feed-large-image"  style={{backgroundImage: `url(${twitterImage})`}}></div>
		</div>
	)
}

export default SocialFeedLarge;