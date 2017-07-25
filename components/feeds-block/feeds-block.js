import BlogExtract from '../blog-extract/blog-extract';
import ImageFeed from '../image-feed/image-feed';
import TwitterExtract from '../twitter-extract/twitter-extract';
import EventsExtract from '../events-extract/events-extract';
import Link from 'next/link';
import ArrowRight from '../icons/arrow-right/arrow-right';

import Data from '../../dummy-data/home/home.json';

const feedsBlock = () => {
	return (
		<div className="feeds-block container">
			<div className="container-inner">
				<BlogExtract 	title={Data.blogTitle}
								subtitle={Data.blogSubtitle}
								date={Data.blogDate}
								blogImage={Data.blogImage} 
								link={Data.blogLink} />
				<TwitterExtract
					title={Data.twitterTitle}
					subtitle={Data.twitterSubtitle}
					date={Data.twitterDate}
					twitterImage={Data.twitterImage} 
					linkTwitterAccount={Data.twitterAccountLink}
					linkTwitterPost={Data.twitterPostLink} />
				<ImageFeed
					socialImagesFirst={Data.socialImagesFirst} 
					socialImagesSecond={Data.socialImagesSecond} 
					link={Data.socialLink} />
				<EventsExtract
					subtitle={Data.eventsSubtitle}
					events={Data.events}
					link={Data.eventsLink} 
				/>
				<div className="feeds-link-container">
					<Link href={Data.oneMoreThinglink.target}>
						<a className="feeds-link">
							<span>{Data.oneMoreThinglink.text}</span>
							<div className="feeds-link-icon">
								<ArrowRight/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default feedsBlock;