import Link from 'next/link'
import { Icon } from '../'

const NotificationBar = ({ color, text, callToActionLabel, callToActionUrl }) => (
	<div className="notification-bar" style={{ backgroundColor: color }}>
		<span className="text">{text + ' '}
			<Link href={callToActionUrl}>
				<a className="call-to-action">
					{callToActionLabel}
					<Icon icon="arrowRight" classes="icon icon-small" />
				</a>
			</Link>
		</span>
	</div>
)

export default NotificationBar