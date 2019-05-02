import React from 'react'

const WorkOverview = ({classes = '', header = '', children, moreButton=false}) => (
	<div className={`work-overview container ${classes}
					${moreButton ? 'work-overview-extra-spacing' : '' }`}>
		<h2 className="work-overview-header">{header}</h2>
		<div className="container-inner">
		{ children }
		</div>
	</div>
);

export default WorkOverview;
