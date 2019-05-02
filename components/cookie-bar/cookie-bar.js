import React, { Component } from 'react'
import Link from 'next/link'
import cookie from '../_helpers/cookie'
import Router from 'next/router'

class CookieBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accepted: false,
  }
  Router.onRouteChangeStart = () => this.setCookie()
  }

  setCookie = () => {
    cookie('accepted-cookies', true, 100)
    this.setState({ accepted: true })
  }

  render() {
    const { text, callToActionLabel, callToActionUrl, button } = this.props
    const hiddenClass = this.state.accepted ? 'hidden' : ''

    return (
      <div className={`cookie-bar ${hiddenClass}`}>
        <p className="cookie-bar-text">
          {text + ' '}
          <Link href={callToActionUrl}>
            <a className="cookie-bar-link">{callToActionLabel}</a>
          </Link>
        </p>
        <button onClick={this.setCookie} className="btn-clear btn-secondary cookie-bar-btn">
          {button}
        </button>
      </div>
    )
  }
}

export default CookieBar
