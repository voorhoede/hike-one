import ArrowRight from '../icons/arrow-right/arrow-right';

const SocialFeedSmall = ({socialImagesFirst, socialImagesSecond}) => {
	return (
		<div className="social-feed-small-container">
			<a href="#social">	
				<div className="social-feed-small">
					<div className="social-feed-small-image" style={{backgroundImage: `url(${socialImagesFirst})`}}></div>
					<div className="social-feed-small-icon">
						<ArrowRight />
					</div>
				</div>
			</a>
			<a href="#social">
				<div className="social-feed-small">
					<div className="social-feed-small-image" style={{backgroundImage: `url(${socialImagesSecond})`}}></div>
					<div className="social-feed-small-icon">
						<ArrowRight />
					</div>
				</div>
			</a>
		</div>
	)
}

export default SocialFeedSmall;