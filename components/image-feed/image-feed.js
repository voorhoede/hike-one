import ArrowRight from '../icons/arrow-right/arrow-right';

const ImageFeed = ({socialImagesFirst, socialImagesSecond, link}) => {
	return (
		<div className="image-feed-container">
			<a href={link}>	
				<div className="image-feed">
					<div className="image-feed-image">
						<img src={socialImagesFirst} alt=""/>
					</div>
					<div className="image-feed-icon">
						<ArrowRight />
					</div>
				</div>
			</a>
			<a href={link}>
				<div className="image-feed">
					<div className="image-feed-image">
						<img src={socialImagesSecond} alt=""/>
					</div>
					<div className="image-feed-icon">
						<ArrowRight />
					</div>
				</div>
			</a>
		</div>
	)
}

export default ImageFeed;