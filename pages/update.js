import React from 'react'
import "isomorphic-fetch"

import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'

import {
	Author,
	BodyQuote,
	CallToAction,
	FiftyFifty,
	Footer,
	FullWidthHeader,
	FullWidthImageSmall,
	InlineMedia,
	Layout,
	MailchimpForm,
	MenuBar,
	RichBodyText,
	SocialShare,
	TextCenter,
	UpdateExtractSmall,
	UpdateOverviewSmall,
} from '../components'

const Update = ({ Data, fontsLoaded, fullUrl }) => (
	<Layout
		title={`Hike One - ${Data.title}`}
		fontsLoaded={fontsLoaded}
		seo={Data.seo}
		url={fullUrl}
	>
		<main className="main js-main">
			<MenuBar color="white" />

			<article className="article">
				<FullWidthHeader
					headerImage={Data.headerImage.url}
					color={Data.color.hex}
					title={Data.title}
					authorName={Data.authors.map(author => author.name).join(', ')}
					updatedDate={Data.date}
				/>

				{Data.content.map((component, index) => {
					switch (component.itemType) {
						case 'rich_body_text':
							return <RichBodyText key={index} content={component.content} textCenter={component.centered} />

						case 'body_quote':
							return <BodyQuote key={index} quote={component.quote} quotee={component.quotee} />

						case '50_50':
							return (
								<FiftyFifty
									classes='fifty-fifty-update'
									key={index}
									contentLeft={component.textLeft}
									title={component.title}
									text={component.text}
									image={component.image && component.image.url}
									video={component.video}
								/>
							)

						case '50_50_text_right':
							return (
								<FiftyFifty
									classes='fifty-fifty-update'
									key={index}
									title={component.title}
									text={component.text}
									image={component.image.url}
								/>
							)

						case '50_50_text_left':
							return (
								<FiftyFifty
									classes='fifty-fifty-update'
									key={index}
									contentLeft="true"
									title={component.title}
									text={component.text}
									image={component.image.url}
								/>
							)

						case 'inline_image':
							const image = component.image ? component.image.url : undefined
							return (
								<InlineMedia
									key={index}
									image={image}
									caption={component.caption}
								/>
							)

						case 'inline_image_large':
							const imageLarge = component.image ? component.image.url : undefined
							return (
								<InlineMedia
									key={index}
									large={true}
									image={imageLarge}
									caption={component.caption}
								/>
							)

						case 'full_width_image_small':
							return <FullWidthImageSmall key={index} index={index} image={component.image.url} />

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
							)

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
							)
					}
				})}

				<SocialShare
					facebookLink={`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`}
					linkedinLink={`https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${Data.title}&summary=${Data.seo.description}&source=Hike&20One`}
					twitterLink={`https://twitter.com/intent/tweet?text=${Data.title}&url=${fullUrl}`}
				/>

				<div className="authors">
					{Data.authors.map(author => {
						return (
							<Author
								name={author.name}
								role={author.role}
								photoUrl={author.photo.url}
								summary={author.summary}
							/>
						)
					})}
				</div>

				<TextCenter
					classes="text-center-font-medium text-center-spacing-small"
					title={Data.updateLinksTitle}
				/>

				<UpdateOverviewSmall>
					{Data.relatedUpdates.length && Data.relatedUpdates.map((item, index) => (
						<UpdateExtractSmall
							key={index}
							index={index}
							title={item.updateExtract.title}
							date={item.updateExtract.date}
							authors={item.updateExtract.authors}
							target={item.updateExtract.link}
							image={item.updateExtract.image.url}
							category={item.updateExtract.category.name}
							color={item.updateExtract.themeColor.hex}
							external={item.updateExtract.isExternalLink}
						/>
					))}
				</UpdateOverviewSmall>
			</article>

			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl}
			/>
		</main>
	</Layout>
)

Update.getInitialProps = async ({ req, res, query, asPath }) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
	const fullUrl = `${baseUrl}${asPath}`
	const data = await getData(baseUrl, `updates/${query.slug}`, res)
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

	return { Data: data, fontsLoaded, fullUrl}
}

export default Update
