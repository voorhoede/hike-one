import React from 'react';
import Link from 'next/link'

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import FiftyFifty from '../components/50-50/50-50';
import QuoteBlock from '../components/quote-block/quote-block';
import FullWidthImage from '../components/full-width-image/full-width-image';

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


				<main className="main js-main">
					<Header />
					<article className="article-full-width">
						<CaseIntro
							title="Gone in 60 seconds"
							subtitle="SITA asked us to make it astonishingly easy for passengers all over the world to check in their luggage within  1 minute."
							image="static/images/drop-fly-header.jpg" />
						<CaseTextCenter />
						<FiftyFifty className="fifty-fifty-content-left"
							title="Truly global"
							text="We created a real smart system, that could predict the most used presets in languages at certain times of the day. This helped passengers in quickly selecting a language."
							image="static/images/drop_fly1.jpg" />

                        <FullWidthImage image="static/images/team-copy-3-2.jpg" />

                        <QuoteBlock
                            color="purple"
                            quote="We learned so much from hacking our own prototype, to be able to observe real people checking in with our system… on day 5."
							citeName="Hylke van Maaren"
                            citeTitle="Design Director - Hike One"
							citeImage="static/images/hylke.jpg"
                        />
						<LogoList logos={logos} />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
