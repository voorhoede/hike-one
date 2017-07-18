import React from 'react';

import ServicesItem from '../services-item/services-item';
import ShapesFront from './services-overview-shapes-front';
import ShapesBack from './services-overview-shapes-back';

class ServicesOverview extends React.Component {
    render() {
		const props = this.props;
		const classes = props.classes;

        return (
            <section className={`services-overview`}>
				<ShapesBack/>
				<div className="container-inner">
					<h2 className="section-header content">{props.title}</h2>
					<ul className="no-style">
						{ props.items.map((service, index, classes) => <ServicesItem key={index} index={index} data={service} classes={classes} />) }
					</ul>

				</div>
				<ShapesFront />
            </section>
        );
    }
}

export default ServicesOverview;
