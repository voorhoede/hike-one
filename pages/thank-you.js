import React from 'react'
import PropTypes from 'prop-types'
import getData from '../lib/get-data'
import cookie from '../components/_helpers/cookie'
import {
  ButtonPrimaryLink,
  Footer,
  Layout,
  MenuBar,
  TextCenter,
  TextCenterShapes,
} from '../components'

const ThankYou = ({ data = {}, footer = {}, fontsLoaded = '', fullUrl = '' }) => (
  <Layout
    title="Hike One - Thank you"
    fontsLoaded={fontsLoaded}
    url={fullUrl}>
    <main className="main js-main">

      <MenuBar color="black" />

      <article className="article article-thank-you">
        <TextCenter title={data.title} text={data.content}>
          <TextCenterShapes.variation3Back position="back" />
          <TextCenterShapes.variation4Front position="front" />
        </TextCenter>

        <ButtonPrimaryLink href={data.callToActionUrl} classes="btn btn-large btn-centered">
          {data.callToActionLabel}
        </ButtonPrimaryLink>
      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

ThankYou.getInitialProps = async ({ req, res, asPath }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fullUrl = `${baseUrl}${asPath}`
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, data] = await fetchAll(['footer', 'thank-you'])

  return { data, footer, fontsLoaded, fullUrl }
}

ThankYou.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.bool,
  fullUrl: PropTypes.string,
}

export default ThankYou
