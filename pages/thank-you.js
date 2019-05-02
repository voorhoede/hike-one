import React from 'react'
import PropTypes from 'prop-types'
import cookie from '../components/_helpers/cookie'

import {
  ButtonPrimaryLink,
  Footer,
  MenuBar,
  Layout,
  TextCenter,
  TextCenterShapes,
} from '../components'

import getData from '../lib/get-data'

const ThankYou = ({ page, fontsLoaded, fullUrl }) => (
  <Layout title="Hike One - Thank you" fontsLoaded={fontsLoaded} url={fullUrl}>
    <main className="main js-main">
      <MenuBar color="black" />

      <article className="article article-thank-you">
        <TextCenter title={page.title} text={page.content}>
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

ThankYou.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const page = await getData(baseUrl, 'thank-you', res)

  return { page, fontsLoaded, fullUrl }
}

ThankYou.propTypes = {
  page: PropTypes.object,
  fontsLoaded: PropTypes.bool,
  fullUrl: PropTypes.string,
}

export default ThankYou
