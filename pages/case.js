import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ReadMore from '../components/read-more/read-more';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import FiftyFifty from '../components/50-50/50-50';
import QuoteBlock from '../components/quote-block/quote-block';
import LogoList from '../components/logo-list/logo-list';
import TextCard from '../components/text-card/text-card';
import FullWidthImage from '../components/full-width-image/full-width-image';


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
		const readMoreBlockImageBlock = {
			image: "static/images/img-vbh.jpg",
			title: "VBH Pivot App",
			buttonValue: "View case",
			buttonTarget: "#"
		};
		const readMoreBlockButtons = [
			{
				link: "#",
				title: "Your  first Design Sprint: do these 3 things frist",
				subtext: "24 November 2016 | Matthijs Collard & Martijn Pillich"
			},
			{
				link: "#",
				title: "In 5 days from sketch to tested prototype with Design Sprints",
				subtext: "17 November 2016 | Ingmar Coenen"
			}
		];

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
                        <TextCard
                        title="A design sprint in the rush of an airport"
                        text="Using the Google Ventures method, we managed to go from idea to prototype in five days. While testing on day five, we had no actual machine to test the prototype in. That’s why we taped iPads to existing screens, while SITA hooked up laptops to the screens. For passengers, the experience was no different. " />
						<LogoList logos={logos} />
						<ReadMore
							imageBlock={readMoreBlockImageBlock}
							buttons={readMoreBlockButtons} />
					</article>
					<Footer />
				</main>
			</Layout>
		);
	}
}

export default Case;
