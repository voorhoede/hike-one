import '../../styles/index.less';

import fetchContent from '../../lib/fetch-content';

import Layout from '../../components/layout/layout';
import Head from '../../components/head/head';
import BodyQuote from '../../components/body-quote/body-quote';
import CallToAction from '../../components/call-to-action/call-to-action';
import Contact from '../../components/contact/contact';
import ContactShapes from '../../components/contact/contact-shapes';
import ContactForm from '../../components/contact-form/contact-form';
import FiftyFifty from '../../components/50-50/50-50';
import Footer from '../../components/footer/footer';
import FullWidthHeader from '../../components/full-width-header/full-width-header';
import FullWidthImageSmall from '../../components/full-width-image-small/full-width-image-small';
import InlineMedia from '../../components/inline-media/inline-media';
import LogoCarousel from '../../components/logo-carousel/logo-carousel';
import MailchimpForm from '../../components/mailchimp/mailchimp-form';
import MenuBar from '../../components/menu-bar/menu-bar';
import RichBodyText from '../../components/rich-body-text/rich-body-text';
import TextCenter from '../../components/text-center/text-center';
import UpdateExtractSmall from '../../components/update-extract-small/update-extract-small';
import UpdateOverviewSmall from '../../components/update-overview-small/update-overview-small';
import ActiveCampaignForm from '../../components/active-campaign-form/active-campaign-form';
import WorkOverview from '../../components/work-overview/work-overview';
import CaseExtractSmall from '../../components/case-extract-small/case-extract-small';

const Page = ({ topic, footer, preview }) => (
	<Layout preview={preview}>
		<Head
			title={topic.seo.title}
			description={topic.seo.description}
			image={topic.seo.image}
			twitterCard={topic.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<FullWidthHeader
				headerImage={topic.headerImage.url}
				headerImageLarger={topic.headerImageLarger}
				imagePositionCenter={topic.imagePositionCenter}
				color={topic.color.hex}
				title={topic.title}
				titleOnly={true}
			/>

			<main>
				{topic.content.map((component, index) => {
					switch (component.itemType) {
						case 'active_campaign_form':
							return (
								<ActiveCampaignForm key={index} activeCampaignId={component.activeCampaignId} />
							);

						case 'rich_body_text':
							return (
								<RichBodyText
									key={index}
									content={component.content}
									textCenter={component.centered}
								/>
							);

						case 'body_quote':
							return <BodyQuote key={index} quote={component.quote} quotee={component.quotee} />;

						case '50_50':
							return (
								<FiftyFifty
									key={index}
									contentLeft={component.textLeft}
									title={component.title}
									text={component.text}
									image={component.image}
									video={component.video}
									googleMapsIframe={component.googleMapsIframe}
								/>
							);

						case '50_50_text_right':
							return (
								<FiftyFifty
									key={index}
									title={component.title}
									text={component.text}
									image={component.image}
								/>
							);

						case '50_50_text_left':
							return (
								<FiftyFifty
									key={index}
									contentLeft={true}
									title={component.title}
									text={component.text}
									image={component.image}
								/>
							);

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

						case 'full_width_image_small':
							return <FullWidthImageSmall key={index} index={index} image={component.image.url} />;

						case 'logo_carousel':
							return (
								<LogoCarousel key={index} title={component.title} companies={component.companies} />
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

						case 'subscription_form':
							return (
								component.subscriptionForm && (
									<MailchimpForm
										key={index}
										title={component.subscriptionForm.title}
										listId={component.subscriptionForm.listId}
										description={component.subscriptionForm.description}
										inputFields={component.subscriptionForm.extraInputFields}
										buttonLabel={component.subscriptionForm.button}
										hasShadow={component.subscriptionForm.hasShadow}
									/>
								)
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

			{topic.contact && (
				<Contact
					title={topic.contact.title}
					button={topic.contact.button}
					link={topic.contact.externalLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ContactShapes position="front" />
				</Contact>
			)}

			<TextCenter title={topic.caseLinksTitle} />

			{topic.caseLinks.length > 0 && (
				<WorkOverview>
					{topic.caseLinks.map((item, index) => (
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
			)}

			{topic.updateLinks.length > 0 && (
				<>
					<TextCenter title={topic.updateLinksTitle} />

					<UpdateOverviewSmall>
						{topic.updateLinks.map((item, index) => (
							<UpdateExtractSmall
								key={index}
								index={index}
								authors={item.authors}
								category={item.category.name}
								color={item.themeColor.hex}
								date={item.date}
								link={item.externalLink}
								slug={item.slug}
								image={item.image.url}
								target={item.externalLink ? true : false}
								title={item.title}
								topic={item.topic}
							/>
						))}
					</UpdateOverviewSmall>
				</>
			)}
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
		topic(filter: { slug: { eq: "${params.slug}" } }) {
			title
			imagePositionCenter
			headerImage { url }
			headerImageLarger
			color { hex }
			caseLinksTitle
			updateLinksTitle

			caseLinks {
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
				topic
				externalLink
				authors { name }
				category { name }
				themeColor { hex }
				image { url }
			}

			contact {
				title
				button
				externalLink
			}

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

			content {
				... on ActiveCampaignFormRecord {
					itemType: _modelApiKey
					activeCampaignId
				}
				... on BodyQuoteRecord {
					itemType: _modelApiKey
					quote
					quotee
				}
				... on _5050Record {
					itemType: _modelApiKey
					textLeft
					title
					text
					googleMapsIframe
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
				... on _5050TextRightRecord {
					itemType: _modelApiKey
					title
					text
					image {
						url
						format
					}
				}
				... on _5050TextLeftRecord {
					itemType: _modelApiKey
					title
					text
					image {
						url
						format
					}
				}
				... on CallToActionRecord {
					itemType: _modelApiKey
					title
					buttonText
					url
					bgColor {
						hex
					}
					titleWhite
					fullWidth
					isExternalLink
				}
				... on FullWidthImageSmallRecord {
					itemType: _modelApiKey
					image {
						url
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
				... on RichBodyTextRecord {
					itemType: _modelApiKey
					content
					centered
				}
				... on SubscriptionFormRecord {
					itemType: _modelApiKey
					subscriptionForm {
						title
						listId
						description
						extraInputFields {
							label
							inputType
							required
						}
						button
						hasShadow
					}
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
				... on LogoCarouselRecord {
					itemType: _modelApiKey
					title
					companies {
						name
						logo { url }
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
