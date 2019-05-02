import React from 'react'
import ButtonSecondaryLink from '../buttons/button-secondary/button-secondary-link';

const UpdateOverviewSmall = ({children}) => (
	<div className="update-overview-small container">
		<div className="container-inner">
		{ children }
		</div>
		<div className="update-overview-button-centered">
			<ButtonSecondaryLink href="/updates" classes="btn-red-border" icon="arrowRight">
				All updates
			</ButtonSecondaryLink>
		</div>
	</div>
);

export default UpdateOverviewSmall;
