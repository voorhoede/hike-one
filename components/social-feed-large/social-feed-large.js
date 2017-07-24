import ArrowRight from '../icons/arrow-right/arrow-right';

const SocialFeedLarge = ({ twitterImage, subtitle, title, date }) => {
	return (
		<div className="social-feed-large"> 
			<div className="social-feed-large-image"  style={{backgroundImage: `url(${twitterImage})`}}></div>
			<div className="social-feed-large-text">
				<div className="social-feed-large-triangle"></div>
				<h4>{subtitle}</h4>
				<h3>{title}</h3>
				<span>{date}</span>
				<ArrowRight />
			</div>
		</div>
	)
}

export default SocialFeedLarge;