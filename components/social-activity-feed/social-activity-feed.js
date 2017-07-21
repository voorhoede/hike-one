import BlogFeed from '../blog-feed/blog-feed';
import SocialFeedSmall from '../social-feed-small/social-feed-small';
import SocialFeedLarge from '../social-feed-large/social-feed-large';
import SocialFeedEvents from '../social-events/social-events';

import Data from '../../dummy-data/home/home.json';

const socialActivityFeed = () => {
	return (
		<div className="social-acitivity-feed container">
			<div className="container-inner">
				<BlogFeed 	title={Data.blogTitle}
							subtitle={Data.blogSubtitle}
							date={Data.blogDate}
							blogImage={Data.blogImage} />
				<SocialFeedLarge
					title={Data.twitterTitle}
					subtitle={Data.twitterSubtitle}
					date={Data.twitterDate}
					twitterImage={Data.twitterImage} />
				<SocialFeedSmall 
					socialImagesFirst={Data.socialImagesFirst} 
					socialImagesSecond={Data.socialImagesSecond} />
				<SocialFeedEvents 
					subtitle={Data.eventsSubtitle}
					events={Data.events}
					link={Data.eventsLink} 
				/>
			</div>
		</div>
	)
}

export default socialActivityFeed;