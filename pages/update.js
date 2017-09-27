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
import TextCenter from '../components/text-center/text-center';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverviewSmall from '../components/update-overview-small/update-overview-small';

const Update = ({Data, fontsLoaded, fullUrl}) => (
	<Layout title={`Hike One - ${Data.title}`}
			fontsLoaded={fontsLoaded}
			seo={Data.seo}
			url={fullUrl} >
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
								<RichBodyText key={index} content={component.content}/>
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
								<FullWidthImageSmall
									key={index}
									index={index}
									image={component.image.url} />
							);
					}
				})}
				<SocialShare
					facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
					linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${Data.title}&summary=${Data.seo.description}&source=Hike&20One`}
					twitterLink={`https://twitter.com/intent/tweet?text=${Data.title}&url=${fullUrl}`}
				/>

				<Author
					name={Data.author.name}
					role={Data.author.role}
					photoUrl={Data.author.photo.url}
					summary={Data.authorSummary}
				/>

				<TextCenter
					classes="text-center-font-medium text-center-spacing-small"
					title={Data.updateLinksTitle} />

				<UpdateOverviewSmall>
					{ Data.updateLinks.map((item, index) => (
						<UpdateExtractSmall
							key={index}
							index={index}
							title={item.title}
							date={item.date}
							author={item.author.name}
							target={item.link}
							image={item.image.url}
							category={item.category.name}
							color={item.themeColor.hex} />
					))}
				</UpdateOverviewSmall>

			</article>
			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl} />
		</main>
	</Layout>
);

Update.getInitialProps = async ({req, query, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const res = await fetch(`${baseUrl}/api/updates/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data: json, fontsLoaded, fullUrl};
};

export default Update;
