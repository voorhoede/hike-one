import BlogExtract from '../blog-extract/blog-extract';
import ImageFeed from '../image-feed/image-feed';
import TwitterExtract from '../twitter-extract/twitter-extract';
import EventsExtract from '../events-extract/events-extract';

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
					link={Data.twitterLink} />
				<ImageFeed
					socialImagesFirst={Data.socialImagesFirst} 
					socialImagesSecond={Data.socialImagesSecond} 
					link={Data.socialLink} />
				<EventsExtract
					subtitle={Data.eventsSubtitle}
					events={Data.events}
					link={Data.eventsLink} 
				/>
			</div>
		</div>
	)
}

export default feedsBlock;