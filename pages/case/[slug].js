import '../../styles/index.less';

import React from 'react';
import fetchContent from '../../lib/fetch-content';
import setComponentCounter from '../../components/_helpers/setParallaxComponentCounter';
import getDateFormat from '../../components/_helpers/getDateFormat';
import scrollToElement from '../../components/_helpers/scrollToElement';

import Layout from '../../components/layout/layout';
import Head from '../../components/head/head';
import PageHeader from '../../components/page-header/page-header';
import MenuBar from '../../components/menu-bar/menu-bar';
import TextCenter from '../../components/text-center/text-center';
import FiftyFifty from '../../components/50-50/50-50';
import * as TextCenterShapes from '../../components/text-center/text-center-shapes';
import * as FiftyFiftyShapes from '../../components/50-50/50-50-shapes';
import ImageCombo from '../../components/image-combo/image-combo';
import * as ImageComboShapes from '../../components/image-combo/image-combo-shapes';
import * as CollageShapes from '../../components/collage/collage-shapes';
import FullWidthImage from '../../components/full-width-image/full-width-image';
import FullWidthImageStatic from '../../components/full-width-image-static/full-width-image-static';
import QuoteBlock from '../../components/quote-block/quote-block';
import TextCard from '../../components/text-card/text-card';
import Collage from '../../components/collage/collage';
import LogoList from '../../components/logo-list/logo-list';
import InlineMedia from '../../components/inline-media/inline-media';
import CallToAction from '../../components/call-to-action/call-to-action';
import ContactForm from '../../components/contact-form/contact-form';
import Contact from '../../components/contact/contact';
import ContactShapes from '../../components/contact/contact-shapes';
import WorkOverview from '../../components/work-overview/work-overview';
import CaseExtractSmall from '../../components/case-extract-small/case-extract-small';
import UpdateLinks from '../../components/update-links/update-links';
import UpdateLink from '../../components/update-link/update-link';
import Footer from '../../components/footer/footer';

const scrollToTargetClass = 'js-scroll-to-target';

// object with parallax shape layer variations for every type of component
// combined with the componentCounter object a specific variantion is chosen for each component
const parallaxLayersMap = {
	'40_60_text_right': [[<FiftyFiftyShapes.TextRightSmall1Front position="front" key="1" />]],
	'40_60_text_left': [[<FiftyFiftyShapes.TextLeftSmall1Back position="back" key="1" />]],
	'50_50_text_left': [[<FiftyFiftyShapes.TextLeftSmall1Back position="back" key="1" />]],
	'50_50_text_right': [[<FiftyFiftyShapes.TextRight1Back position="back" key="1" />]],
	image_combo: [
		[<ImageComboShapes.WithText1Front position="front" key="1" />],
		[<ImageComboShapes.WithoutText1Front position="front" key="1" />],
	],
	collage: [
		[
			<CollageShapes.variation1Front position="front" key="1" />,
			<CollageShapes.variation1Back position="back" key="2" />,
		],
	],
};

// object that counts how many times a component is used on this page
// this is done by the `setComponentCounter` function
let componentCounter = {};

const Page = ({ workcase, footer, preview }) => (
	<Layout preview={preview}>
		<Head
			title={workcase.seo.title}
			description={workcase.seo.description}
			image={workcase.seo.image}
			twitterCard={workcase.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<PageHeader
				onClickScrollButton={() => scrollToElement(scrollToTargetClass)}
				video={workcase.header.video}
				title={workcase.header.title}
				subtitle={workcase.header.subtitle}
				image={workcase.header.backgroundImage.url}
				showGradient={workcase.header.displayGradient}
			/>

			<main className={`${scrollToTargetClass} page-scrolling-content`}>
				<TextCenter title={workcase.introTitle} text={workcase.introText}>
					<TextCenterShapes.variation1Back position="back" />
				</TextCenter>

				{workcase.components.map((component, index) => {
					let itemType = component.itemType;

					if (component.itemType === '50_50') {
						if (component.textLeft) {
							itemType = '50_50_text_left';
						} else {
							itemType = '50_50_text_right';
						}
					}

					const hasTextCard = !!(component.textTitle && component.textTitle.length > 1);

					// // set component count
					componentCounter = setComponentCounter(componentCounter, itemType, parallaxLayersMap);
					const count = componentCounter[itemType];

					// // if a parallax variation layer is available then use that one
					const parallaxLayers =
						componentCounter[itemType] !== null ? parallaxLayersMap[itemType][count] : '';

					switch (itemType) {
						case '40_60_text_right':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									text={component.text}
									imageLarge={true}
									image={component.image}
								>
									{parallaxLayers}
								</FiftyFifty>
							);

						case '40_60_text_left':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									contentLeft={true}
									text={component.text}
									imageLarge={true}
									image={component.image}
								>
									{parallaxLayers}
								</FiftyFifty>
							);

						case '50_50_text_right':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									text={component.text}
									image={component.image}
									video={component.video}
								>
									{parallaxLayers}
								</FiftyFifty>
							);

						case '50_50_text_left':
							return (
								<FiftyFifty
									key={index}
									contentLeft={true}
									title={component.title}
									text={component.text}
									image={component.image}
									video={component.video}
								>
									{parallaxLayers}
								</FiftyFifty>
							);

						case 'image_combo':
							return (
								<ImageCombo key={index} hasText={hasTextCard}>
									{hasTextCard && (
										<TextCard title={component.textTitle} text={component.textContent} />
									)}

									<FullWidthImage image={component.image && component.image.url} index={index} />

									{component.quoteAuthorTitle && (
										<QuoteBlock
											color={component.quoteColor.color}
											alignment={
												component.quoteAlignLeft
													? 'colored-block--align-left'
													: 'colored-block--align-right'
											}
											quote={component.quote}
											citeName={component.quoteAuthorName}
											citeTitle={component.quoteAuthorTitle}
											citeImage={component.quoteAuthorImage.url}
										/>
									)}
									{parallaxLayers}
								</ImageCombo>
							);

						case 'collage':
							return (
								<Collage
									key={index}
									title={component.title}
									text={component.text}
									imageMedium={component.imageBig.url}
									imageSmall={component.imageSmall.url}
								>
									{parallaxLayers}
								</Collage>
							);

						case 'full_width_image':
							return (
								<FullWidthImage
									key={index}
									index={index}
									image={component.image && component.image.url}
									title={component.title}
									subtitle={component.subtitle}
								/>
							);

						case 'full_width_image_static':
							return (
								<FullWidthImageStatic
									key={index}
									index={index}
									image={component.image && component.image.url}
									title={component.title}
									subtitle={component.subtitle}
								/>
							);

						case 'collaboration':
							return (
								<React.Fragment key={index}>
									{(component.title || component.text) && (
										<TextCenter title={component.title} text={component.text} />
									)}
									<LogoList companies={component.companies} />
								</React.Fragment>
							);

						case 'text_center':
							return <TextCenter key={index} title={component.title} text={component.text} />;

						case 'inline_image':
							return (
								<InlineMedia key={index} image={component.image} caption={component.caption} />
							);

						case 'inline_image_large':
							return (
								<InlineMedia
									key={index}
									large={true}
									image={component.image}
									caption={component.caption}
								/>
							);

						case 'video':
							return (
								<InlineMedia
									key={index}
									video={component}
									caption={component.caption}
									large={component.large}
								/>
							);

						case 'call_to_action':
							return (
								<CallToAction
									key={index}
									title={component.title}
									buttonText={component.buttonText}
									url={component.url}
									bgColor={component.bgColor && component.bgColor.hex}
									titleWhite={component.titleWhite}
									fullWidth={component.fullWidth}
									isExternalLink={component.isExternalLink}
								/>
							);

						case 'contact_form_component':
							return (
								<ContactForm
									key={index}
									singleForm={true}
									form={{
										forms: [component.form],
										thankYouMessage: component.thankYouMessage,
										title: component.title,
									}}
								/>
							);
					}
				})}
			</main>

			<Contact
				title={workcase.contact.title}
				button={workcase.contact.button}
				link={workcase.contact.externalLink}
			>
				<ContactShapes position="front" />
			</Contact>

			<WorkOverview>
				{workcase.caseExtract.map((item, index) => (
					<CaseExtractSmall
						key={index}
						title={item.header.title}
						subtitle={item.header.subtitle}
						image={item.header.backgroundImage}
						companyName={item.companyName}
						color={item.caseThemeColor.hex}
						slug={item.slug}
					/>
				))}
			</WorkOverview>

			<UpdateLinks>
				{workcase.updateLinks.map((item, index) => (
					<UpdateLink
						key={index}
						slug={item.slug}
						href={item.externalLink}
						title={item.title}
						authors={item.authors}
						date={getDateFormat(item.date)}
						target={Boolean(item.externalLink)}
					/>
				))}
			</UpdateLinks>
		</div>

		<Footer form={footer.form} />
	</Layout>
);

export const getStaticPaths = () => ({
	fallback: 'blocking',
	paths: [],
});

export const getStaticProps = async ({ preview, params }) => {
	const graphqlQuery = /* GraphQL */ `{
		workcase: case(filter: { slug: { eq: "${params.slug}" } }) {
			title
			introTitle
			introText

			seo {
				title
				description
				twitterCard
				image {
					url
					width
					height
				}
			}

			header {
				title
				subtitle
				video
				backgroundImage {
					url
				}
				displayGradient
			}

			contact {
				title
				button
				externalLink
			}

			caseExtract {
				slug
				companyName
				caseThemeColor { hex }

				header {
					title
					subtitle
					backgroundImage { url }
				}
			}

			updateLinks {
				slug
				title
				date
				externalLink
				authors { name }
			}

			components {
				... on _5050Record {
					itemType: _modelApiKey
					textLeft
					title
					text
					image {
						url
						format
					}
					video {
						provider
						providerUid
						width
						height
					}
				}
				... on _4060TextLeftRecord {
					itemType: _modelApiKey
					title
					text
					image {
						url
						format
					}
				}
				... on _4060TextRightRecord {
					itemType: _modelApiKey
					title
					text
					image {
						url
						format
					}
				}
				... on TextCenterRecord {
					itemType: _modelApiKey
					title
					text
				}
				... on FullWidthImageRecord {
					itemType: _modelApiKey
					title
					subtitle
					image { url }
				}
				... on FullWidthImageStaticRecord {
					itemType: _modelApiKey
					title
					subtitle
					image { url }
				}
				... on ImageComboRecord {
					itemType: _modelApiKey
					textTitle
					textContent
					image { url }

					quote
					quoteColor { color }
					quoteAuthorTitle
					quoteAuthorName
					quoteAuthorImage { url }
					quoteAlignLeft
				}
				... on CollageRecord {
					itemType: _modelApiKey
					title
					text
					imageBig { url }
					imageSmall { url }
				}
				... on CollaborationRecord {
					itemType: _modelApiKey
					title
					text
					companies {
						name
						website
						logo { url }
					}
				}
				... on InlineImageRecord {
					itemType: _modelApiKey
					caption
					image {
						width
						height
						url
					}
				}
				... on InlineImageLargeRecord {
					itemType: _modelApiKey
					caption
					image {
						width
						height
						url
					}
				}
				... on VideoRecord {
					itemType: _modelApiKey
					large
					autoplay
					controls
					mute
					loop

					video {
						provider
						providerUid
						width
						height
					}
				}
				... on CallToActionRecord {
					itemType: _modelApiKey
					title
					buttonText
					url
					bgColor { hex }
					titleWhite
					fullWidth
					isExternalLink
				}
				... on ContactFormComponentRecord {
					itemType: _modelApiKey
					title
					thankYouMessage
					form {
						id
						title
						formspreeEndpoint
						submitButtonLabel
						emailMessageSubject
						formFields {
							id
							name
							label
							inputType
							required
						}
					}
				}
			}
		}

		footer {
			form {
				title
				description
				listId
				button
				hasShadow
				extraInputFields {
					label
					inputType
					required
				}
			}
		}
	}`;

	return {
		props: await fetchContent({ graphqlQuery, preview }),
		revalidate: 60 * 60 * 8,
	};
};

export default Page;
