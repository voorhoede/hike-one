import React from 'react';
import Link from 'next/link';

class ServicesItem extends React.Component {
    render() {
    	const data = this.props.data;
        return (
            <li>
                <img alt=""/>
                <div>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                    <p>AKA: {data.tags}</p>
					<Link href={data.linkHref}>
						<a href={data.linkHref}>{data.linkLabel}</a>
					</Link>
                </div>
            </li>
        );
    }
}

export default ServicesItem
