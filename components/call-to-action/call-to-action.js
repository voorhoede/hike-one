const CallToAction = ({ title='', url='', bgColor='', buttonText='', fullWidth=false, titleWhite=false }) => {
const textColorClass = titleWhite ? 'title-white' : ''
const containerClass = fullWidth ? 'container' : 'container-inner'
const bgClass = bgColor ? 'call-to-action-bg-color' : ''

	return (
		<div className={`call-to-action ${containerClass} ${bgClass}`} style={{ backgroundColor: bgColor }}>
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
