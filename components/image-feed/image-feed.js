import ArrowRight from '../icons/arrow-right/arrow-right';
import Link from 'next/link';

const ImageFeed = ({socialImagesInstagram, socialImagesDribble, linkDribble, linkInstagram}) => {
	return (
		<div className="image-feed-container">
			<Link href={linkDribble}>
				<a>	
					<div className="image-feed">
						<div className="image-feed-image">
							<img src={socialImagesInstagram} alt=""/>
						</div>
						<div className="image-feed-icon">
							<ArrowRight />
						</div>
					</div>
				</a>
			</Link>
			<Link href={linkInstagram}>
				<a>
					<div className="image-feed">
						<div className="image-feed-image">
							<img src={socialImagesDribble} alt=""/>
						</div>
						<div className="image-feed-icon">
							<ArrowRight />
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default ImageFeed;