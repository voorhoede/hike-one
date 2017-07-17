import React from 'react';
import ShapesFront from './services-approach-shapes-front';

class ServiceApproach extends React.Component {
    render() {
		const props = this.props;
        return (
            <section className="services-approach js-approach">
				<div className="services-approach-inner">
					<p id="services-approach" className="content">
						{props.text}
					</p>
				</div>
				<ShapesFront />
            </section>
        );
    }
}

export default ServiceApproach;
