import '../../styles/index.less';

import fetchContent from '../../lib/fetch-content';

import Layout from '../../components/layout/layout';
import Head from '../../components/head/head';
import MenuBar from '../../components/menu-bar/menu-bar';
import FullWidthHeader from '../../components/full-width-header/full-width-header';
import FiftyFifty from '../../components/50-50/50-50';
import BodyQuote from '../../components/body-quote/body-quote';
import CallToAction from '../../components/call-to-action/call-to-action';
import FullWidthImageSmall from '../../components/full-width-image-small/full-width-image-small';
import InlineMedia from '../../components/inline-media/inline-media';
import RichBodyText from '../../components/rich-body-text/rich-body-text';
import MailchimpForm from '../../components/mailchimp/mailchimp-form';
import Contact from '../../components/contact/contact';
import ContactForm from '../../components/contact-form/contact-form';
import ContactShapes from '../../components/contact/contact-shapes';
import Author from '../../components/author/author';
import TextCenter from '../../components/text-center/text-center';
import UpdateOverviewSmall from '../../components/update-overview-small/update-overview-small';
import UpdateExtractSmall from '../../components/update-extract-small/update-extract-small';
import ActiveCampaignForm from '../../components/active-campaign-form/active-campaign-form';
import Footer from '../../components/footer/footer';

const Page = ({ update, footer, preview }) => (
	<Layout preview={preview}>
		<Head
			title={update.seo.title}
			description={update.seo.description}
			image={update.seo.image}
			twitterCard={update.seo.twitterCard}
		/>

		<MenuBar color="white" />

		<div className="layout-parallax">
			<FullWidthHeader
				headerImage={update.headerImage.url}
				imagePositionCenter={update.imagePositionCenter}
				color={update.color.hex}
				title={update.title}
				authorName={
					update.authors.length
						? update.authors.map((author) => author.name).join(', ')
						: update.staticAuthors || 'Hike One'
				}
				updatedDate={update.date}
			/>

			<main>
				{update.content.map((component, index) => {
					switch (component.itemType) {
						case 'active_campaign_form':
							return (
								<ActiveCampaignForm key={index} activeCampaignId={component.activeCampaignId} />
							);

						case '50_50':
							return (
								<FiftyFifty
									key={index}
									classes="fifty-fifty-update"
									contentLeft={component.textLeft}
									title={component.title}
									text={component.text}
									image={component.image}
									video={component.video}
								/>
							);

						case '50_50_text_right':
							return (
								<FiftyFifty
									key={index}
									classes="fifty-fifty-update"
									title={component.title}
									text={component.text}
									image={component.image}
								/>
							);

						case '50_50_text_left':
							return (
								<FiftyFifty
									key={index}
									classes="fifty-fifty-update"
									contentLeft={true}
									title={component.title}
									text={component.text}
									image={component.image}
								/>
							);

						case 'body_quote':
							return <BodyQuote key={index} quote={component.quote} quotee={component.quotee} />;

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

						case 'full_width_image_small':
							return <FullWidthImageSmall key={index} index={index} image={component.image.url} />;

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

						case 'rich_body_text':
							return (
								<RichBodyText
									key={index}
									content={component.content}
									textCenter={component.centered}
								/>
							);

						case 'subscription_form':
							return (
								<MailchimpForm
									key={index}
									title={component.subscriptionForm.title}
									listId={component.subscriptionForm.listId}
									description={component.subscriptionForm.description}
									inputFields={component.subscriptionForm.extraInputFields}
									buttonLabel={component.subscriptionForm.button}
									hasShadow={component.subscriptionForm.hasShadow}
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

			<div className="authors">
				{update.authors.map((author, index) => {
					return (
						<Author
							key={index}
							name={author.name}
							roles={author.roles}
							photoUrl={author.photo.url}
							summary={author.summary}
						/>
					);
				})}
			</div>

			{update.contact && (
				<Contact
					title={update.contact.title}
					button={update.contact.button}
					link={update.contact.externalLink}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ContactShapes position="front" />
				</Contact>
			)}

			<TextCenter
				classes="text-center-font-medium text-center-spacing-small"
				title={update.updateLinksTitle}
			/>

			<UpdateOverviewSmall>
				{update.updateLinks.map((item, index) => (
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
		update(filter: { slug: { eq: "${params.slug}" } }) {
			title
			date
			imagePositionCenter
			headerImage { url }
			color { hex }
			updateLinksTitle

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

			authors {
				name
				roles { title }
				photo { url }
				summary
			}

			staticAuthors

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

			contact {
				title
				button
				externalLink
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
