import React from 'react'
import PropTypes from 'prop-types'
import cookie from '../components/_helpers/cookie'
import {
  Footer,
  Layout,
  MenuBar,
  TextCenter,
  TextCenterShapes
} from '../components/'

const content404 = {
  title: 'This page is not here',
  text: 'We lost the page! Don′t worry we know the way ) Check out <a href="/team/culture">who we are</a> and <a href="/work">what we do</a>',
}

const content500 = {
  title: 'Whoops, something went wrong',
  text: 'Don′t worry we′ll be back as soon as we can. In the mean time, feel free to call <a href="tel:+31202044577">+31 20 204 45 77</a> or send us a message on <a href="mailto:hello@hike.one">hello@hike.one</a>',
}

const Error = ({ statusCode = 0, fontsLoaded = '', wrapperClass = '' }) => (
  <Layout title="Hike One - Home" fontsLoaded={fontsLoaded} classes={wrapperClass}>
    <main className="main js-main">
      <MenuBar color="black" />
      <article className="article article-error">
        <TextCenter
          title={statusCode === 404 ? content404.title : content500.title}
          text={statusCode === 404 ? content404.text : content500.text}>
          <TextCenterShapes.variation3Back position="back" />
          <TextCenterShapes.variation4Front position="front" />
        </TextCenter>
      </article>
      <Footer
        callToActionLabel="Up for a new challenge yourself? Join us!"
        callToActionUrl="https://hikeone.homerun.co/"
        disableParallax={true}
      />
    </main>
  </Layout>
)

Error.getInitialProps = async ({ res, req, jsonPageRes }) => {
  const statusCode = res
    ? res.statusCode
    : jsonPageRes ? jsonPageRes.status : null
  // temp fix for bug in nextjs rendering 500 page twice.
  // keep an eye on this 'well explained' github issue for a possible fix
  // https://github.com/zeit/next.js/issues/2964
  const wrapperClass = statusCode === 404 ? '' : 'is-500-error'
  const fontsLoaded = req ? req.cookies['fonts-loaded'] : cookie('fonts-loaded')
  return { statusCode, fontsLoaded, wrapperClass }
}

Error.propTypes = {
  statusCode: PropTypes.number,
  fontsLoaded: PropTypes.string,
  wrapperClass: PropTypes.string,
}

export default Error
