import 'core-js/features/array/find'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import loadFonts from '../_helpers/fontLoader'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.checkFontsLoaded = this.checkFontsLoaded.bind(this)
    this.state = {
      fontsLoaded: props.fontsLoaded ? 'fonts-loaded' : '',
    }
  }

  componentDidMount() {
    // scroll to top when reloading a page to correctly position parallax layers
    window.addEventListener('beforeunload', () => window.scrollTo(0, 0))
    this.checkFontsLoaded()
  }

  checkFontsLoaded() {
    // if fonts aren't loaded then check with font observer when they're
    // and add fonts loaded class
    if (this.state.fontsLoaded !== 'fonts-loaded') {
      loadFonts().then(this.setState({ fontsLoaded: 'fonts-loaded' }))
    }
  }

  render() {
    const { fontsLoaded } = this.state
    const { title = 'Hike One', children, seo, classes = '', url = 'https://hike.one' } = this.props
    const socialImage = seo && seo.image
      ? seo.image.url
      : '/static/images/hikeone-default-social.jpg'
    const description = seo && seo.description.length > 0
      ? seo.description
      : 'We guide you to new and better products. Let\'s go!'
    const seoTitle = seo && seo.title
      ? seo.title
      : title

    return (
      <React.Fragment>
        <Head>
          <title>{seoTitle}</title>
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/icons/mstile-150x150.png" />
          <meta name="apple-mobile-web-app-title" content="Hike One" />
          <meta name="application-name" content="Hike One" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content="Hike One" />
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content={socialImage} />
          {seo && seo.image && <meta property="og:image:width" content={seo.image.width} />}
          {seo && seo.image && <meta property="og:image:height" content={seo.image.height} />}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@hikeone" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/static/icons/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/static/icons/favicon-16x16.png" sizes="16x16" />
        </Head>
        <div className={`${fontsLoaded} ${classes}`}>{children}</div>
      </React.Fragment>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string,
  fontsLoaded: PropTypes.string,
  classes: PropTypes.string,
  url: PropTypes.string,
  seo: PropTypes.object,
  children: PropTypes.node,
}

export default Layout
