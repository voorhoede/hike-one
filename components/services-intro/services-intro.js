import React from 'react';
import Link from 'next/link';

import Data from '../../data/services/intro.json';

class ServicesIntro extends React.Component {
    render() {
        return (
            <section className="services-intro">
                <h2 className="section-header">{Data.title}</h2>
				<Link href="#"><a className="btn">{Data.continueReadingButton}</a></Link>
            </section>
        );
    }
}

export default ServicesIntro;
