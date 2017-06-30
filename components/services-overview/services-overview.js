import React from 'react';

import ServicesItem from '../services-item/services-item';
import Shapes from '../services-overview/services-overview-shapes';

class ServicesOverview extends React.Component {
    render() {
		const props = this.props;

        return (
            <section className="services-overview">
				<div className="container-inner">
					<h2 className="section-header">{props.title}</h2>
					<ul className="no-style">
						{ props.items.map((service, index) => <ServicesItem key={index} index={index} data={service}/>) }
					</ul>
				</div>

				<Shapes />
            </section>
        );
    }
}

export default ServicesOverview;
