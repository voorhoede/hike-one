import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Router from 'next/router'
import cookie from '../_helpers/cookie'

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

CookieBar.propTypes = {
  text: PropTypes.string,
  callToActionLabel: PropTypes.string,
  callToActionUrl: PropTypes.string,
  button: PropTypes.string,
}

export default CookieBar
