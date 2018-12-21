import Link from 'next/link'
import { Icon } from '../'

const NotificationBar = ({ color, callToActionLabel, callToActionUrl, text }) => (
	<div className="notification-bar" style={{ backgroundColor: color }}>
		<span>{text}</span>
		<Link href={callToActionUrl}>
			<a className="call-to-action">
				{callToActionLabel}
				<Icon icon="arrowRight" classes="icon icon-small" />
			</a>
		</Link>
	</div>
)

export default NotificationBar
