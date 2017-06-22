import React from 'react';

import ServicesItem from '../services-item/services-item';
import ServicesData from '../../data/services/items.json';
import OverviewData from '../../data/services/overview.json';

class ServicesOverview extends React.Component {
    render() {
		const services = ServicesData.items;

        return (
            <section className="services-overview">
                <h2 className="section-header">{OverviewData.title}</h2>

                <ul>
					{ services.map((service, index) => <ServicesItem key={index} data={service}/>) }
                </ul>
            </section>
        );
    }
}

export default ServicesOverview;
