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
  TextCenterShapes
} from '../components/'

const Error = ({ data = {}, fontsLoaded = '', wrapperClass = '' }) => (
  <Layout title="Hike One - Home" fontsLoaded={fontsLoaded} classes={wrapperClass}>
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

      <Footer form={data.footer.form} />

    </main>
  </Layout>
)

Error.getInitialProps = async ({ res, req, jsonPageRes }) => {
  const statusCode = res
    ? res.statusCode.toString()
    : jsonPageRes ? jsonPageRes.status.toString() : null
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const fetchData = await getData(baseUrl, 'error-pages', res)
  const data = fetchData.find(page => page.error === statusCode) // Find correct error page data
  console.log({ data })
  return { data, fontsLoaded }
}

Error.propTypes = {
  data: PropTypes.object,
  fontsLoaded: PropTypes.string,
  wrapperClass: PropTypes.string,
}

export default Error
