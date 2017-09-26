import React from 'react';
import "isomorphic-fetch";
import cookie from '../components/_helpers/cookie';

import Layout from '../components/layout/layout';
import MenuBar from '../components/menu-bar/menu-bar';
import Footer from '../components/footer/footer';
import Contact from '../components/contact/contact';
import * as ContactShapes from '../components/contact/contact-shapes';
import SocialShare from '../components/social-share/social-share';
import FullWidthHeader from '../components/full-width-header/full-width-header';
import BodyQuote from '../components/body-quote/body-quote';
import InlineImage from '../components/inline-image/inline-image';
import FullWidthImageSmall from '../components/full-width-image-small/full-width-image-small';
import RichBodyText from '../components/rich-body-text/rich-body-text';
import WorkOverview from '../components/work-overview/work-overview';
import CaseExtractSmall from '../components/case-extract-small/case-extract-small';
import UpdateExtractSmall from '../components/update-extract-small/update-extract-small';
import UpdateOverviewSmall from '../components/update-overview-small/update-overview-small';
import TextCenter from '../components/text-center/text-center';
import LogoCarousel from '../components/logo-carousel/logo-carousel';

const Topic = ({Data, fontsLoaded, fullUrl}) => (
	<Layout title={`Hike One - ${Data.title}`}
			fontsLoaded={fontsLoaded}
			seo={Data.seo}>
		<main className="main js-main">
			<MenuBar color="white" />
			<article className="article">
				<FullWidthHeader
					headerImage={Data.headerImage.url}
					color={Data.color.hex}
					title={Data.title}
					titleOnly={true} />

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
						case 'logo_carousel':
							return (
								<LogoCarousel
									key={index}
									title={component.title}
									companies={component.companies}
									animationSpeed={component.animationSpeed}/>
							);

					}
				})}

				<SocialShare
					facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
					linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${Data.title}&summary=${Data.seo.description}&source=Hike&20One`}
					twitterLink={`https://twitter.com/intent/tweet?text=${Data.title}&url=${fullUrl}`}
				/>

				<Contact
					title={Data.contact.title}
					button={Data.contact.button}
					link={Data.contact.externalLink}
					target='_blank' >
					<ContactShapes.variation1Front position="front" />
				</Contact>

				<TextCenter title={Data.caseLinksTitle} />

				<WorkOverview>
					{ Data.caseLinks.map((item, index) => (
						<CaseExtractSmall
							key={index}
							title={item.header.title}
							subtitle={item.header.subtitle}
							image={item.header.backgroundImage}
							companyName={item.companyName}
							color={item.caseThemeColor.hex}
							slug={item.slug} />
					))}
				</WorkOverview>

				<TextCenter title={Data.updateLinksTitle} />

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

Topic.getInitialProps = async ({req, query, asPath}) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
	const fullUrl = `${baseUrl}${asPath}`;
	const res = await fetch(`${baseUrl}/api/topics/${query.slug}`);
	const json = await res.json();

	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded');
	return { Data: json, fontsLoaded, fullUrl};
};

export default Topic;
