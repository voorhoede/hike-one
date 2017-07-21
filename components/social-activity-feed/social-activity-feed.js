import BlogFeed from '../blog-feed/blog-feed';

import Data from '../../dummy-data/home/home.json';

const socialActivityFeed = () => {
	return (
		<div className="container">
			<div className="container-inner">
				<BlogFeed 	title={Data.blogTitle}
							subtitle={Data.blogSubtitle}
							date={Data.blogDate}
							blogImage={Data.blogImage} />
				
				
			</div>
		</div>
	)
}

export default socialActivityFeed;