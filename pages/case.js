import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';

import LogoList from '../components/logo-list/logo-list';

class Case extends React.Component {
	render() {
        const logos = [
            {
                link: 'https://unitid.nl/',
                image: 'static/images/hike-one.svg'
            },
            {
                link: 'https://www.voorhoede.nl/',
                image: 'static/images/hike-one.svg'
            },
            {
                link: 'http://www.sita.aero/?gclid=EAIaIQobChMI-OPI4ubv1AIVp7vtCh0m6wqhEAAYASAAEgL_MPD_BwE',
                image: 'static/images/hike-one.svg'
            },
            {
                link: 'https://vanberlo.nl/',
                image: 'static/images/hike-one.svg'
            }
        ]
		return (
			<Layout title="Hike One - Case">
				<Header />
                <LogoList logos={logos} />
				<h1>Case</h1>
				<p>This is the Case page.</p>
				<Link href="/"><a href="/">Homepage</a></Link>
			</Layout>
		);
	}
}

export default Case;
