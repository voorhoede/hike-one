import React, { Component } from 'react'
import Link from 'next/link'
import { Icon } from '../'
import Cross from '../icons/cross/cross'

class NotificationBar extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isVisible: false,
			scrollCount: 0,
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.onScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	}

	onScroll = () => {
		if (this.state.scrollCount === 0) {
			this.setState({
				isVisible: true,
				scrollCount: this.state.scrollCount + 1
			})
		}
	}

	render() {
		const { color, callToActionLabel, callToActionUrl, text } = this.props

		return (
			<div className={`notification-bar ${this.state.isVisible ? 'visible' : ''}`} style={{ backgroundColor: color }}>
				<span className="text">{text}</span>
				<Link href={callToActionUrl}>
					<a className="call-to-action">
						{callToActionLabel}
						<Icon icon="arrowRight" classes="icon icon-small" />
					</a>
				</Link>
			</div>
		)
	}
}

export default NotificationBar
