import 'core-js/fn/array/find'
import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import loadFonts from '../_helpers/fontLoader'
import GoogleTagManagerConfig from '../google-tag-manager/google-tag-manager-config'

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fontsLoaded: props.fontsLoaded ? 'fonts-loaded' : '',
    }
    this.checkFontsLoaded = this.checkFontsLoaded.bind(this)
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
    const { title = 'Hike One', children, seo, classes, url = 'https://hike.one' } = this.props
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
      <div>
        <Head>
          <title>{seoTitle}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui" />
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
          <link rel="stylesheet" href="/static/styles/index.css" />
          <link rel="manifest" href="/manifest.json" />
          <GoogleTagManagerConfig />
        </Head>
        <div className={`${this.state.fontsLoaded} ${classes}`}>{children}</div>
        <script id="mcjs" dangerouslySetInnerHTML={{
          __html:
            '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/9fcf53aac8cfc03a445bd4e2f/c7ff7fa29349202fda8890cac.js")',
        }} />
        <script dangerouslySetInnerHTML={{
          __html:
            '_linkedin_partner_id = "361124" window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [] window._linkedin_data_partner_ids.push(_linkedin_partner_id)',
        }} />
        <script dangerouslySetInnerHTML={{
          __html:
            '(function(){var s = document.getElementsByTagName("script")[0] var b = document.createElement("script") b.type = "text/javascript"b.async = true b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js" s.parentNode.insertBefore(b, s)})()',
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt="img" src="https://dc.ads.linkedin.com/collect/?pid=361124&fmt=gif" />
        </noscript>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5KJ6PKN" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
      </div>
    )
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  fontsLoaded: PropTypes.string.isRequired,
  classes: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  seo: PropTypes.object.isRequired,
  children: PropTypes.node,
}

export default Layout
