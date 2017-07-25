import React from 'react';
import ShapesFront from './services-intro-shapes-front';

const ServiceApproach = ({text = ''}) => {
	return (
		<section className="services-approach js-approach">
			<div className="services-approach-inner">
				<p id="services-approach" className="content">
					{text}
				</p>
			</div>
			<ShapesFront />
		</section>
	);
};

export default ServiceApproach;
