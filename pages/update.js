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
import CallToAction from '../components/call-to-action/call-to-action';
import FiftyFifty from '../components/50-50/50-50';

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
					authorName={Data.authors.map(author => author.name).join(', ')}
					updatedDate={Data.date}/>
				{ Data.content.map((component, index) => {
					switch (component.itemType) {
						case 'rich_body_text':
							return (
								<RichBodyText key={index} content={component.content}/>
							);
						case 'body_quote':
							return <BodyQuote key={index} quote={component.quote} quotee={component.quotee}/>;

						case '50_50_text_right':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									text={component.text}
									image={component.image.url}>
								</FiftyFifty>
							);
						case '50_50_text_left':
							return (
								<FiftyFifty
									key={index}
									contentLeft="true"
									title={component.title}
									text={component.text}
									image={component.image.url}>
								</FiftyFifty>
							);
						case 'inline_image':
							const image = component.image ? component.image.url : undefined;
							return (
								<InlineImage
									key={index}
									image={image}
									videoControls={true}
									video={component.inlineVideoSrc}
									caption={component.caption} />
							);
						case 'inline_image_large':
							const imageLarge = component.image ? component.image.url : undefined;
							return (
								<InlineImage
									key={index}
									large={true}
									image={imageLarge}
									caption={component.caption} />
							);
						case 'full_width_image_small':
							return (
								<FullWidthImageSmall
									key={index}
									index={index}
									image={component.image.url} />
							);
						case 'call_to_action':
							return (
								<CallToAction key={index} title={component.title} url={component.url}/>
							);
					}
				})}
				<SocialShare
					facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
					linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${Data.title}&summary=${Data.seo.description}&source=Hike&20One`}
					twitterLink={`https://twitter.com/intent/tweet?text=${Data.title}&url=${fullUrl}`}
				/>

				<div className="authors">
					{ Data.authors.map(author => {
						return <Author
											name={author.name}
											role={author.role}
											photoUrl={author.photo.url}
											summary={author.summary}
									/>
					})}
				</div>

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
							authors={item.authors}
							target={item.link}
							image={item.image.url}
							category={item.category.name}
							color={item.themeColor.hex}
							external={item.isExternalLink} />
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
