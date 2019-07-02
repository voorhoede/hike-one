import React from 'react'
import PropTypes from 'prop-types'
import cookie from '../components/_helpers/cookie'
import getData from '../lib/get-data'
import {
  Footer,
  InlineImage,
  Layout,
  MenuBar,
  TextCenter,
  TextCenterShapes,
} from '../components/'

const Error = ({ data = {}, footer = {}, fontsLoaded = '', wrapperClass = '' }) => (
  <Layout
    title="Hike One - Home"
    fontsLoaded={fontsLoaded}
    classes={wrapperClass}>
    <main className="main js-main">

      <MenuBar color="black" />

      <article className={`article article-error ${data.image ? 'article-error--has-image' : ''}`}>
        <TextCenter
          title={data.title}
          text={data.description}>
          <TextCenterShapes.variation3Back position="back" />
          <TextCenterShapes.variation4Front position="front" />
        </TextCenter>

        {data.image && (
          <section className="error-image container">
            <div className="container-inner">
              <InlineImage image={data.image.url} />
            </div>
          </section>
        )}
      </article>

      <Footer form={footer.form} />

    </main>
  </Layout>
)

Error.getInitialProps = async ({ res, req, jsonPageRes }) => {
  const statusCode = res
    ? res.statusCode.toString()
    : jsonPageRes ? jsonPageRes.status.toString() : null
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const fetchJson = model => getData(baseUrl, model, res)
  const fetchAll = models => Promise.all(models.map(fetchJson))
  const [footer, errorPages] = await fetchAll(['footer', 'error-pages'])
  const data = errorPages.find(page => page.error === statusCode) // Find correct error page data

  return { data, footer, fontsLoaded }
}

Error.propTypes = {
  data: PropTypes.object,
  footer: PropTypes.object,
  fontsLoaded: PropTypes.string,
  wrapperClass: PropTypes.string,
}

export default Error
