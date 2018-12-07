import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Link from 'next/link'
import cookie from '../_helpers/cookie'

class CookieNotification extends Component {
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

  componentDidMount() {
    const element = ReactDOM.findDOMNode(this.content);
    console.log(element.offsetHeight)
  }

  render() {
    const { text, callToActionLabel, callToActionUrl, button } = this.props

    return (
      <div className={`cookie-notification ${ this.state.accepted ? 'hidden' : '' }`} ref={r => this.content = r}>
        <span>{text + ' '}</span>
        <Link href={callToActionUrl}>
          <a>{callToActionLabel}</a>
        </Link>
        <button onClick={this.setCookie}>
          {button}
        </button>
      </div>
    )
  }
}

export default CookieNotification
