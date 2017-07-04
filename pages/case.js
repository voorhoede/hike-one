import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';

import QuoteBlock from '../components/quote-block/quote-block';

class Case extends React.Component {
	render() {
		return (
			<Layout title="Hike One - Case">
				<Header />
                <QuoteBlock
                    color="purple"
                    quote="We learned so much from hacking our own prototype, to be able to observe real people checking in with our system… on day 5."
                    fromName="Hylke van Maaren"
                    fromTitle="Design Director - Hike One"
                    fromImage="static/images/hylke.jpg"
                />
				<h1>Case</h1>
				<p>This is the Case page.</p>
				<Link href="/"><a href="/">Homepage</a></Link>
			</Layout>
		);
	}
}

export default Case;
