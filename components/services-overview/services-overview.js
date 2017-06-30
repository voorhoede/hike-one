import React from 'react';

import ServicesItem from '../services-item/services-item';

class ServicesOverview extends React.Component {
    render() {
		const props = this.props;
        return (
            <section className="services-overview container-inner">
                <h2 className="section-header">{props.title}</h2>
                <ul className="no-style">
					{ props.items.map((service, index) => <ServicesItem key={index} index={index} data={service}/>) }
                </ul>
            </section>
        );
    }
}

export default ServicesOverview;
