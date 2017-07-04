import React from 'react';

import Diamond from '../shapes/diamond/diamond';
import TrailTriangle from '../shapes/trail-triangle/trail-triangle';
import DoubleDiamond from '../shapes/double-diamond/double-diamond';

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
					{ index === 0 && <Diamond shadow="true"/> }
					{ index === 1 && <DoubleDiamond shadow="true"/> }
                    { index === 2 && <TrailTriangle shadow="true"/> }
                </div>
            </li>
        );
    }
}

export default ServicesItem
