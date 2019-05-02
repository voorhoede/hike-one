import React from 'react'

const OfficeOverview = ({classes = '', header = '', children}) => (
	<div className={`office-overview container ${classes}`}>

		<div className="container-inner">
			<h2 className="office-overview-header">{ header }</h2>
			{ children }
		</div>
	</div>
);

export default OfficeOverview;
