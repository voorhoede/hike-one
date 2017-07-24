import React from 'react';

import PrimaryButtonLink from '../buttons/button-primary/button-primary-link';

const CTABlock = ({ image, title, button }) => (
	<section className="cta-block" style={{backgroundImage: `url(${image})`}}>
		<div className="container">
			<h2>{title}</h2>
			{image}
			<PrimaryButtonLink href="#" value={button} />
		</div>
	</section>
)

export default CTABlock;
