const CallToAction = ({title='', url=''}) => {
	return (
		<div className="call-to-action container">
			<a href={url} className="call-to-action-button btn-primary btn-large content" target="_blank">{title}</a>
		</div>
	)
}

export default CallToAction;
