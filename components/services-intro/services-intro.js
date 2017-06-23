import React from 'react';
import Link from 'next/link';

class ServicesIntro extends React.Component {
    render() {
    	const props = this.props;
        return (
            <section className="services-intro">
                <h2 className="section-header">{props.title}</h2>
				<Link href="#"><a className="btn">{props.buttonLabel}</a></Link>
            </section>
        );
    }
}

export default ServicesIntro;
