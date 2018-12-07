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

    this.props.accept()
  }

  render() {
    const { text, callToActionLabel, callToActionUrl, button } = this.props

    return (
      <div className={`cookie-notification ${ this.state.accepted ? 'hidden' : '' }`} ref={r => this.content = r}>
        <p className="cookie-content">
          {text + ' '}
          <Link href={callToActionUrl}>
            <a className="cookie-link">{callToActionLabel}</a>
          </Link>
        </p>
        <button onClick={this.setCookie} className="btn-clear btn-cookie">
          {button}
        </button>
      </div>
    )
  }
}

export default CookieBar
