import React from 'react';
import Link from 'next/link';

import Diamond from '../shapes/diamond/diamond';
import ButtonSecondary from '../buttons/button-secondary/button-secondary';

class ServicesItem extends React.Component {
    render() {
    	const data = this.props.data;
        return (
            <li className="services-item">
                <div className="services-item-info">
                    <h3 className="services-item-heading">{data.title}</h3>
                    <p className="services-item-text">{data.text}</p>
					<ul>
						{ data.tags.map(tag => <li>{ tag.tag }</li>) }
				   </ul>
                </div>

                <div className="service-item-graphics">
                    <Diamond shadow="true" />
                    <ButtonSecondary classes="white" href="#" value={data.link}/>
                </div>
            </li>
        );
    }
}

export default ServicesItem
