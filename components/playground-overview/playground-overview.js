import React from 'react'

const PlaygroundOverview = ({classes='', title='', children}) => (
	<div className={`playground-overview container ${classes}`}>

		<div className="container-inner">
			<h2 className="playground-overview-header">{ title }</h2>
			{ children }
		</div>
	</div>
);

export default PlaygroundOverview;
