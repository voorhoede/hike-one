import React from 'react';
import Link from 'next/link';

class ServicesIntro extends React.Component {
    render() {
        return (
            <section className="services-intro">
                <h2 className="section-header">One big statement about who we are and what we do.</h2>
                <p>Two or three sentences elaborating on the what, how and why and our culture. The product/innovation manager should already be able to determine whether we can help him/her.</p>
				<Link href="#"><a className="btn">More about our story </a></Link>
            </section>
        );
    }
}

export default ServicesIntro;
