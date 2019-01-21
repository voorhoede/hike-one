import React from 'react'
import "isomorphic-fetch"

import cookie from '../components/_helpers/cookie'
import getDateFormat from '../components/_helpers/getDateFormat'
import scrollToElement from '../components/_helpers/scrollToElement'
import setComponentCounter from '../components/_helpers/setParallaxComponentCounter'

import {
	CallToAction,
	CaseExtractSmall,
	Collage,
	CollageShapes,
	Contact,
	ContactShapes,
	FiftyFifty,
	FiftyFiftyShapes,
	Footer,
	FullWidthImage,
	FullWidthImageStatic,
	ImageCombo,
	ImageComboShapes,
	InlineImage,
	Layout,
	LogoList,
	MenuBar,
	PageHeader,
	QuoteBlock,
	TextCard,
	TextCenter,
	TextCenterShapes,
	UpdateLink,
	UpdateLinks,
	WorkOverview,
} from '../components'

// object with parallax shape layer variations for every type of component
// combined with the componentCounter object a specific variantion is chosen for each component
const parallaxLayersMap = {
	'40_60_text_right': [
		[<FiftyFiftyShapes.TextRightSmall1Front position="front" key="1"/>]
	],
	'40_60_text_left': [
		[<FiftyFiftyShapes.TextLeftSmall1Back position="back" key="1"/>]
	],
	'50_50_text_left': [
		[<FiftyFiftyShapes.TextLeftSmall1Back position="back" key="1"/>]
	],
	'50_50_text_right': [
		[<FiftyFiftyShapes.TextRight1Back position="back" key="1"/>]
	],
	'image_combo':[
		[<ImageComboShapes.WithText1Front position="front" key="1"/>],
		[<ImageComboShapes.WithoutText1Front position="front" key="1"/>]
	],
	'collage': [
		[<CollageShapes.variation1Front position="front" key="1" />, <CollageShapes.variation1Back position="back" key="2"/>]
	]
}

// object that counts how many times a component is used on this page
// this is done by the `setComponentCounter` function
let componentCounter = {}
const scrollToTargetClass = 'js-scroll-to-target'

const Case = ({ Data, fontsLoaded, fullUrl }) => (
	<Layout
		title={`Hike One - ${Data.title}`}
		fontsLoaded={fontsLoaded}
		seo={Data.seo}
		url={fullUrl}
	>
	<main className="main js-main">
		<MenuBar color="white" />
			<article className="article">
				<PageHeader
					alignToBottom={true}
					onClickScrollButton={() => scrollToElement(scrollToTargetClass) }
					video={Data.header.video}
					title={Data.header.title}
					subtitle={Data.header.subtitle}
					image={Data.header.backgroundImage.url}
					showGradient={Data.header.displayGradient}
				/>

				<div className={`${scrollToTargetClass} page-scrolling-content`}>
					<TextCenter
						title={Data.introTitle}
						text={Data.introText}
					>
						<TextCenterShapes.variation1Back position="back" />
					</TextCenter>

					{Data.components.map((component, index) => {
						let itemType = component.itemType

						if (component.itemType === '50_50') {
							if (component.textLeft) {
								itemType = '50_50_text_left'
							} else {
								itemType = '50_50_text_right'
							}
						}

						// set component count
						componentCounter = setComponentCounter(componentCounter, itemType, parallaxLayersMap)
						const count = componentCounter[itemType]

						// if a parallax variation layer is available then use that one
						const parallaxLayers = componentCounter[itemType] !== null
							? parallaxLayersMap[itemType][count]
							: ''

						switch (itemType) {
							case '40_60_text_right':
								return (
									<FiftyFifty
										key={index}
										title={component.title}
										text={component.text}
										imageLarge="true"
										image={component.image.url}
									>
										{ parallaxLayers }
									</FiftyFifty>
								)

							case '40_60_text_left':
								return (
									<FiftyFifty
										key={index}
										title={component.title}
										contentLeft="true"
										text={component.text}
										imageLarge="true"
										image={component.image.url}
									>
										{ parallaxLayers }
									</FiftyFifty>
								)

							case '50_50':
								return (
									<FiftyFifty
										key={index}
										contentLeft={component.textLeft}
										title={component.title}
										text={component.text}
										image={component.image && component.image.url}
										video={component.videoSrc}
									>
										{ parallaxLayers }
									</FiftyFifty>
								)

							case '50_50_text_right':
								return (
									<FiftyFifty
										key={index}
										title={component.title}
										text={component.text}
										image={component.image.url}
									>
										{ parallaxLayers }
									</FiftyFifty>
								)

							case '50_50_text_left':
								return (
									<FiftyFifty
										key={index}
										contentLeft="true"
										title={component.title}
										text={component.text}
										image={component.image.url}
									>
										{ parallaxLayers }
									</FiftyFifty>
								)

							case 'image_combo':
								const hasTextCard = !!(component.textTitle && component.textTitle.length > 1)

								return (
									<ImageCombo
										key={index}
										classes={hasTextCard ? 'image-combo-text': ''}
									>
										{hasTextCard && <TextCard title={component.textTitle} text={component.textContent} />}

										<FullWidthImage
											image={component.image.url}
											index={index}
										/>

										{component.quoteAuthorTitle && (
											<QuoteBlock
												color={component.quoteColor.color }
												alignment={component.quoteAlignLeft ? 'text-block-left' : 'text-block-right'}
												quote={component.quote}
												citeName={component.quoteAuthorName}
												citeTitle={component.quoteAuthorTitle}
												citeImage={component.quoteAuthorImage.url}
											/>
										)}
										{ parallaxLayers }
									</ImageCombo>
								)

							case 'collage':
								return (
									<Collage
										key={index}
										title={component.title}
										text={component.text}
										imageMedium={component.imageBig.url}
										imageSmall={component.imageSmall.url}
									>
										{ parallaxLayers }
									</Collage>
								)

							case 'full_width_image':
								return (
									<FullWidthImage
										key={index}
										index={index}
										image={component.image.url}
										title={component.title}
										subtitle={component.subtitle}
									/>
								)

							case 'full_width_image_static':
								return (
									<FullWidthImageStatic
										key={index}
										index={index}
										image={component.image.url}
										title={component.title}
										subtitle={component.subtitle}
									/>
								)

							case 'collaboration':
								return (
									<div key={index}>
										<TextCenter title={component.title} text={component.text} />
										<LogoList companies={component.companies} />
									</div>
								)

							case 'text_center':
								return (
									<div key={index}>
										<TextCenter title={component.title} text={component.text} />
									</div>
								)

							case 'inline_image':
								const image = component.image ? component.image.url : undefined

								return (
									<InlineImage
										key={index}
										image={image}
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

							case 'call_to_action':
								return <CallToAction key={index} title={component.title} url={component.url} />
						}
					})}

					<Contact title={Data.contact.title} button={Data.contact.button}>
						<ContactShapes.variation1Front position="front" />
					</Contact>

					<WorkOverview>
						{Data.caseExtract.map((item, index) => (
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
						{Data.updateLinks.map((update, index) => (
							<UpdateLink
								key={index}
								title={update.title}
								author={update.authors.map(author => author.name).join(', ')}
								date={getDateFormat(update.date)}
								target={update.link}
								external={update.isExternalLink}
							/>
						))}
					</UpdateLinks>
				</div>
			</article>
			<Footer
				callToActionLabel={Data.footer.callToActionLabel}
				callToActionUrl={Data.footer.callToActionUrl}
			/>
		</main>
	</Layout>
)

Case.getInitialProps = async ({ req, query, asPath }) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
	const fullUrl = `${baseUrl}${asPath}`
	const Data = await fetch(`${baseUrl}/api/cases/${query.slug}`).then(res => res.json())
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

	return { Data, fontsLoaded, fullUrl }
}

export default Case
