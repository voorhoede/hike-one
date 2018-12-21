import React from 'react'

import cookie from '../components/_helpers/cookie'

import {
	ButtonPrimaryLink,
	Footer,
	MenuBar,
	Layout,
	TextCenter,
	TextCenterShapes,
} from '../components'

const ThankYou = ({ page, fontsLoaded }) => (
	<Layout title="Hike One - Thank you" fontsLoaded={fontsLoaded}>
		<main className="main js-main">
			<MenuBar color="black" />

			<article className="article article-thank-you">
				<TextCenter
					title={page.title}
					text={page.content}
				>
					<TextCenterShapes.variation3Back position="back" />
					<TextCenterShapes.variation4Front position="front" />
				</TextCenter>

				<ButtonPrimaryLink href={page.callToActionUrl} classes="btn btn-large btn-centered">
					{page.callToActionLabel}
				</ButtonPrimaryLink>
			</article>
			<Footer
				callToActionLabel="Up for a new challenge yourself? Join us!"
				callToActionUrl="https://hikeone.homerun.co/"
				disableParallax={true}
			/>
		</main>
	</Layout>
)

ThankYou.getInitialProps = async ({ req }) => {
	const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
	const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
	const page = await fetch(`${baseUrl}/api/thank-you`).then(res => res.json())

	return { page, fontsLoaded }
}

export default ThankYou
