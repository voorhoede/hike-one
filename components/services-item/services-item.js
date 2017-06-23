import React from 'react';
import Link from 'next/link';

class ServicesItem extends React.Component {
    render() {
    	const data = this.props.data;
        return (
            <li className="services-item">
                <img alt="" src={data.image.url}/>
                <div className="services-item-info">
                    <h3 className="services-item-heading">{data.title}</h3>
                    <p className="services-item-text">{data.text}</p>
                    <p className="services-item-tags">AKA: {data.tags}</p>
					<Link href="#">
						<a className="btn">{data.link}</a>
					</Link>
                </div>
            </li>
        );
    }
}

export default ServicesItem
