import React from 'react'

const RichBodyText = ({ content='', textCenter }) => (
	<div className={`rich-body-text ${textCenter ? 'text-center' : ''}`}
		dangerouslySetInnerHTML={{__html: content}}>
	</div>
)

export default RichBodyText
