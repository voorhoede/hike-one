import "isomorphic-fetch"

import scrollToElement from '../components/_helpers/scrollToElement'
import cookie from '../components/_helpers/cookie'
import { CookieNotification } from '../components'

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

const Home = ({ Data, fontsLoaded, fullUrl, acceptedCookies }) => {
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
						<NotificationBar
							color={Data.notificationBar.color}
							text={Data.notificationBar.text}
							callToActionLabel={Data.notificationBar.callToActionLabel}
							callToActionUrl={Data.notificationBar.callToActionUrl}
						/>

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
			{!acceptedCookies && (
				<CookieNotification
					text={Data.cookieNotification.text}
					callToActionLabel={Data.cookieNotification.callToActionLabel}
					callToActionUrl={Data.cookieNotification.callToActionUrl}
					button={Data.cookieNotification.button}
				/>
			)}
		</Layout>
	)
}

Home.getInitialProps = async ({ req, asPath }) => {
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
	const fullUrl = `${baseUrl}${asPath}`
	const Data = await fetch(`${baseUrl}/api/home`).then(res => res.json())
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
	const acceptedCookies = req ? req.cookies['accepted-cookies'] : cookie('accepted-cookies')

	return { Data, fontsLoaded, fullUrl, acceptedCookies }
}

export default Home
