import React from 'react';
import Shapes from '../services-approach/services-approach-shapes';

class ServiceApproach extends React.Component {
    render() {
		const props = this.props;
        return (
            <section className="services-approach">
				<div className="services-approach-inner">
					<p className="content">{props.text}</p>
				</div>
				<Shapes />
            </section>
        );
    }
}

export default ServiceApproach;
