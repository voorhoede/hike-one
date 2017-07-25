import ArrowRight from '../icons/arrow-right/arrow-right';

const ImageFeed = ({socialImagesFirst, socialImagesSecond}) => {
	return (
		<div className="image-feed-container">
			<a href="#social">	
				<div className="image-feed">
					<div className="image-feed-image" style={{backgroundImage: `url(${socialImagesFirst})`}}></div>
					<div className="image-feed-icon">
						<ArrowRight />
					</div>
				</div>
			</a>
			<a href="#social">
				<div className="image-feed">
					<div className="image-feed-image" style={{backgroundImage: `url(${socialImagesSecond})`}}></div>
					<div className="image-feed-icon">
						<ArrowRight />
					</div>
				</div>
			</a>
		</div>
	)
}

export default ImageFeed;