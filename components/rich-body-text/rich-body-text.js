import React from 'react';

const RichBodyText = ({content = ''}) => (
	<div className="rich-body-text"
		dangerouslySetInnerHTML={{__html: content}}>
	</div>
);

export default RichBodyText;
