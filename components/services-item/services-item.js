import React from 'react';
import Link from 'next/link';

class ServicesItem extends React.Component {
    render() {
    	const data = this.props.data;
        return (
            <li className="services-item">
                <img alt=""/>
                <div className="services-item-info">
                    <h3 className="services-item-heading">{data.title}</h3>
                    <p className="services-item-text">{data.text}</p>
                    <p className="services-item-tags">AKA: {data.tags}</p>
					<Link href={data.linkHref}>
						<a className="btn">{data.linkLabel}</a>
					</Link>
                </div>
            </li>
        );
    }
}

export default ServicesItem
