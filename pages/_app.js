import React from 'react'
import App from 'next/app'
import cookie from '../components/_helpers/cookie'
import { CookieBar } from '../components'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { req } = ctx
    let pageProps = await Component.getInitialProps(ctx)

    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const cookieBar = await fetch(`${baseUrl}/api/cookie-bar`).then(res => res.json())
    const acceptedCookies = req ? req.cookies['accepted-cookies'] : cookie('accepted-cookies')

    return { pageProps, acceptedCookies, cookieBar }
  }

  render() {
    const { Component, pageProps, acceptedCookies, cookieBar } = this.props

    return (
      <React.Fragment>
        <Component {...pageProps} />
        {!acceptedCookies && (
          <CookieBar
            text={cookieBar.text}
            callToActionLabel={cookieBar.callToActionLabel}
            callToActionUrl={cookieBar.callToActionUrl}
            button={cookieBar.button}
          />
        )}
      </React.Fragment>
    )
  }
}
