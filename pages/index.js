import "isomorphic-fetch"
import scrollToElement from '../components/_helpers/scrollToElement'
import cookie from '../components/_helpers/cookie'

import {
	CaseExtract,
	Contact,
	ContactShapes,
	Footer,
	Layout,
	MenuBar,
	NotificationBar,
	PageHeader,
	PageHeaderShapes,
	ServicesOverviewSmall,
	TextCenter,
	UpdateExtractSmall,
	UpdateOverviewSmall,
} from '../components'

const Home = ({ Data, fontsLoaded, fullUrl }) => {
	const scrollToTargetClass = 'js-scroll-to-target'

	return (
		<Layout title="Hike One - Home"
			fontsLoaded={fontsLoaded}
			seo={Data.seo}
			url={fullUrl}
		>
			<main className="main js-main" >
				<MenuBar color="white" />
				<article className="article">
					<PageHeader
						alignToBottom={true}
						onClickScrollButton={() => scrollToElement(scrollToTargetClass)}
						video={Data.header.video}
						title={Data.header.title}
						subtitle={Data.header.subtitle}
						image={Data.header.backgroundImage.url}
						showGradient={Data.header.displayGradient}
					>
						<PageHeaderShapes.variation1Front position="front" />
						<PageHeaderShapes.variation1Back position="back" />
					</PageHeader>

					<div className={`${scrollToTargetClass} ${Data.notificationBar && 'has-notification-bar'} page-scrolling-content`}>
						{Data.notificationBar && (
							<NotificationBar
								color={Data.notificationBar.color}
								text={Data.notificationBar.text}
								callToActionLabel={Data.notificationBar.callToActionLabel}
								callToActionUrl={Data.notificationBar.callToActionUrl}
							/>
						)}

						<ServicesOverviewSmall
							title={Data.servicesItemTitle}
							services={Data.serviceItems}
						/>

						<TextCenter
							classes="text-center-font-medium text-center-spacing-small"
							title={Data.caseExtractTitle}
							text={Data.caseExtractIntro}
						/>

						<CaseExtract
							color={Data.caseExtract.case.caseThemeColor.hex}
							companyName={Data.caseExtract.case.companyName}
							headerImage={Data.caseExtract.image.url}
							title={Data.caseExtract.title}
							subtitle={Data.caseExtract.subtitle}
							slug={Data.caseExtract.case.slug}
						/>

						<TextCenter
							classes="text-center-font-medium text-center-spacing-small"
							title={Data.eventsTitle}
							text={Data.eventsIntro}
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

						<Contact
							title={Data.contact.title}
							button={Data.contact.button}
						>
							<ContactShapes.variation1Front position="front" />
						</Contact>
					</div>
				</article>
				<Footer
					callToActionLabel={Data.footer.callToActionLabel}
					callToActionUrl={Data.footer.callToActionUrl}
					notificationBar={Data.notificationBar}
				/>
			</main>
		</Layout>
	)
}

Home.getInitialProps = async ({ req, asPath }) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
	const fullUrl = `${baseUrl}${asPath}`
	const Data = await fetch(`${baseUrl}/api/home`).then(res => res.json())
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')

	return { Data, fontsLoaded, fullUrl }
}

export default Home
