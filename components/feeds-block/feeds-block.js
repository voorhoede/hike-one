import BlogExtract from '../blog-extract/blog-extract';
import ImageFeed from '../image-feed/image-feed';
import TwitterExtract from '../twitter-extract/twitter-extract';
import EventsExtract from '../events-extract/events-extract';
import ButtonCleanLink from '../buttons/button-clean/button-clean-link';


import Data from '../../dummy-data/home/home.json';

const feedsBlock = () => (
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
				socialImagesInstagram={Data.socialImagesInstagram}
				socialImagesDribble={Data.socialImagesDribble}
				linkInstagram={Data.linkInstagram}
				linkDribble={Data.linkDribble} />
			<EventsExtract
				subtitle={Data.eventsSubtitle}
				events={Data.events}
				link={Data.eventsLink}
			/>
			<div className="feeds-link-container">
				<ButtonCleanLink href={Data.oneMoreThinglink.target} icon="arrowRight" classes="btn-red feeds-link">
					{Data.oneMoreThinglink.text}
				</ButtonCleanLink>
			</div>
		</div>
	</div>
);


export default feedsBlock;
