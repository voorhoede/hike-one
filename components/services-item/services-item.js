import React from 'react';

import TrailDiamond from '../shapes/trail-diamond/trail-diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import TrailDoubleDiamond from '../shapes/trail-double-diamond/trail-double-diamond';
import Parallax from '../parallax/parallax';

class ServicesItem extends React.Component {

    render() {
    	const data = this.props.data;
    	const index = this.props.index;
        return (
            <li className="services-item clearfix">
                <div className="services-item-info">
                    <h3 className="services-item-heading content">{data.title}</h3>
                    <p className="services-item-text content">{data.text}</p>
					<ul className="services-item-tags">
						{ data.tags.map((tag, index) => <li key={index} className="content">{ tag.tag }</li>) }
				   </ul>
                </div>

                <div className="service-item-graphics">
					<Parallax speed="0.05">
						{ index === 0 && <TrailDiamond shadow="true"/> }
						{ index === 1 && <TrailDoubleDiamond shadow="true"/> }
						{ index === 2 && <TrailTriangle shadow="true"/> }
					</Parallax>
                </div>
            </li>
        );
    }
}

export default ServicesItem
