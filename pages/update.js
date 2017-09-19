import React from 'react';
import "isomorphic-fetch";

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import cookie from '../components/_helpers/cookie';

import SocialShare from '../components/social-share/social-share';
import FullWidthHeader from '../components/full-width-header/full-width-header';
import BodyQuote from '../components/body-quote/body-quote';
import InlineImage from '../components/inline-image/inline-image';
import Author from '../components/author/author';
import FullWidthImageSmall from '../components/full-width-image-small/full-width-image-small';
import RichBodyText from '../components/rich-body-text/rich-body-text';

const Update = ({Data, fontsLoaded}) => (
	<Layout title={`Hike One - ${Data.title}`}
			fontsLoaded={fontsLoaded}
			seo={Data.seo}
			keywords={Data.keywords}>
		<main className="main js-main">
			<MenuBar color="white" />
			<article className="article">
				<FullWidthHeader
					headerImage={Data.headerImage.url}
					color={Data.color.hex}
					title={Data.title}
					authorName={Data.author.name}
					updatedDate={Data.date}/>
				{ Data.content.map((component, index) => {
					switch (component.itemType) {
						case 'rich_body_text':
							return (
								<RichBodyText content={component.content}/>
							);
						case 'body_quote':
							return <BodyQuote key={index} quote={component.quote}/>;

						case 'inline_image':
							return (
								<InlineImage
									key={index}
									image={component.image.url}
								    caption={component.caption} />
							);
						case 'inline_image_large':
							return (
								<InlineImage
									key={index}
									large={true}
									image={component.image.url}
									caption={component.caption} />
							);
						case 'full_width_image_small':
							return (
								<FullWidthImageSmall key={index} image={component.image.url} />
							);
					}
				})}
				<SocialShare
					facebookLink={'#'}
					linkedinLink={'#'}
					twitterLink={'#'}
				/>
				<Author
					name={Data.author.name}
					role={Data.author.role}
					photoUrl={Data.author.photo.url}
					summary={Data.authorSummary}
				/>

			</article>
			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl} />
		</main>
	</Layout>
);

Update.getInitialProps = async ({req, query}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const res = await fetch(`${baseUrl}/api/updates/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data: json, fontsLoaded};
};

export default Update;
