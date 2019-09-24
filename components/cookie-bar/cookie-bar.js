import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import cookie from '../_helpers/cookie'
import { ButtonSecondary } from '../'

class CookieBar extends Component {
  constructor(props) {
    super(props)
    this.setCookie = this.setCookie.bind(this)
    this.state = {
      accepted: false,
    }

    Router.onRouteChangeStart = () => this.setCookie()
  }

  setCookie() {
    cookie('accepted-cookies', true, 100)
    this.setState({ accepted: true })
  }

  render() {
    const { text, callToActionLabel, callToActionUrl, button } = this.props
    const { accepted } = this.state
    const hiddenClass = accepted ? 'hidden' : ''

    return (
      <div className={`cookie-bar ${hiddenClass}`}>
        <p className="cookie-bar-text">
          {text}
          <Link href={callToActionUrl}>
            <a className="cookie-bar-link">{callToActionLabel}</a>
          </Link>
        </p>
        <ButtonSecondary onClick={this.setCookie} classes="cookie-bar-btn">
          {button}
        </ButtonSecondary>
      </div>
    )
  }
}

CookieBar.propTypes = {
  text: PropTypes.string,
  callToActionLabel: PropTypes.string,
  callToActionUrl: PropTypes.string,
  button: PropTypes.string,
}

export default CookieBar
