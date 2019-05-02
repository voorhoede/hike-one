import React from 'react'
import App, { Container } from 'next/app'
import { CookieBar } from '../components'
import cookie from '../components/_helpers/cookie'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { req } = ctx
    let pageProps = {}

    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const cookieBar = await fetch(`${baseUrl}/api/cookie-bar`).then(res => res.json())
    const acceptedCookies = req ? req.cookies['accepted-cookies'] : cookie('accepted-cookies')

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps, acceptedCookies, cookieBar }
  }

  render() {
    const { Component, pageProps, acceptedCookies, cookieBar } = this.props

    return (
      <Container>
        <Component {...pageProps} />
        {!acceptedCookies && (
          <CookieBar
            text={cookieBar.text}
            callToActionLabel={cookieBar.callToActionLabel}
            callToActionUrl={cookieBar.callToActionUrl}
            button={cookieBar.button}
          />
        )}
      </Container>
    )
  }
}
