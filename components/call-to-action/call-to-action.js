const CallToAction = ({ title='', url='', bgColor='', buttonText='', fullWidth=false, titleWhite=false }) => {
const textColorClass = titleWhite ? 'title-white' : ''

	return (
		<div className={`call-to-action ${fullWidth ? 'container' : 'container-inner'}`} style={{ backgroundColor: bgColor }}>
			{title &&
				<p className={`call-to-action-title ${textColorClass}`}>
					{title}
				</p>
			}
			<a href={url} className="call-to-action-button btn-primary btn-large content" target="_blank">{buttonText}</a>
		</div>
	)
}

export default CallToAction
