import React from 'react'
import Link from 'next/link'

const CallToAction = ({ title='', url='', bgColor='', buttonText='', fullWidth=false, titleWhite=false, isExternalLink=false }) => {
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
			<Link href={url}>
				<a className="call-to-action-button btn-primary btn-large content" target={isExternalLink ? '_blank' : ''}>
					{buttonText}
				</a>
			</Link>
		</div>
	)
}

export default CallToAction
