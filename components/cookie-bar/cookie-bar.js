import React, { Component } from 'react'
import Link from 'next/link'
import cookie from '../_helpers/cookie'

class CookieBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      accepted: false,
    }
  }

  setCookie = () => {
    cookie('accepted-cookies', true, 100)
    this.setState({ accepted: true })
  }

  render() {
    const { text, callToActionLabel, callToActionUrl, button, fontsLoaded } = this.props
    const fontsLoadedClass = fontsLoaded ? 'fonts-loaded' : ''
    const hiddenClass = this.state.accepted ? 'hidden' : ''

    return (
      <div className={`cookie-bar ${hiddenClass} ${fontsLoadedClass}`}>
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
