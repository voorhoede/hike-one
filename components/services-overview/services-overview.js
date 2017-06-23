import React from 'react';

import ServicesItem from '../services-item/services-item';

class ServicesOverview extends React.Component {
    render() {
		const services = [
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			},
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			},
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			},
			{
				image: 'http://via.placeholder.com/75x75',
				title: 'Design',
				text:'Two or three sentences about our design services. Keep it general here and focus on the possibilities.',
				tags: 'wireframing, visual design, animations, …',
				linkLabel: '...and more',
				linkHref: '#'
			}
		];

        return (
            <section className="services-overview">
                <h2 className="section-header">Our services</h2>
                <ul className="no-style">
					{ services.map((service, index) => <ServicesItem key={index} data={service}/>) }
                </ul>
            </section>
        );
    }
}

export default ServicesOverview;
