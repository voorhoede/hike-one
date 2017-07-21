import BlogFeed from '../blog-feed/blog-feed';
import SocialFeedSmall from '../social-feed-small/social-feed-small';
import SocialFeedLarge from '../social-feed-large/social-feed-large';

import Data from '../../dummy-data/home/home.json';

const socialActivityFeed = () => {
	return (
		<div className="container">
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
			
			</div>
		</div>
	)
}

export default socialActivityFeed;