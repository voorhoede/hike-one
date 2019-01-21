import { TextCenter } from '../'

const CallToAction = ({ title='', url='', bgColor, buttonText='' }) => {
	return (
		<div className="call-to-action container-inner" style={{ backgroundColor: bgColor }}>
			{title && <p className="call-to-action-title">{title}</p>}
			<a href={url} className="call-to-action-button btn-primary btn-large content" target="_blank">{buttonText}</a>
		</div>
	)
}

export default CallToAction
