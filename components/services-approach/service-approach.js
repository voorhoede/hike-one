import React from 'react';
import Shapes from '../services-approach/services-approach-shapes';

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
				<Shapes />
            </section>
        );
    }
}

export default ServiceApproach;
