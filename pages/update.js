import React from 'react'
import "isomorphic-fetch"

import cookie from '../components/_helpers/cookie'

import {
	Author,
	BodyQuote,
	CallToAction,
	FiftyFifty,
	Footer,
	FullWidthHeader,
	FullWidthImageSmall,
	InlineImage,
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
	<Layout title={`Hike One - ${Data.title}`}
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
							return <RichBodyText key={index} content={component.content} />

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
									video={component.videoSrc}
									caption={component.caption}
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
								<InlineImage
									key={index}
									image={image}
									videoControls={true}
									video={component.inlineVideoSrc}
									caption={component.caption}
								/>
							)

						case 'inline_image_large':
							const imageLarge = component.image ? component.image.url : undefined
							return (
								<InlineImage
									key={index}
									large={true}
									image={imageLarge}
									caption={component.caption}
								/>
							)

						case 'full_width_image_small':
							return <FullWidthImageSmall key={index} index={index} image={component.image.url} />

						case 'call_to_action':
							return <CallToAction key={index} title={component.title} url={component.url} />

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
					{Data.updateLinks.map((item, index) => (
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
							external={item.isExternalLink}
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

Update.getInitialProps = async ({ req, query, asPath }) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
	const fullUrl = `${baseUrl}${asPath}`
	const res = await fetch(`${baseUrl}/api/updates/${query.slug}`)
	const json = await res.json()
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

	return { Data: json, fontsLoaded, fullUrl}
}

export default Update
