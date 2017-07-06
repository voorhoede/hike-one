import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ReadMoreBlock from '../components/read-more-block/read-more-block';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import FiftyFifty from '../components/50-50/50-50';
import QuoteBlock from '../components/quote-block/quote-block';

class Case extends React.Component {
	render() {
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
                        <QuoteBlock
                            color="purple"
                            quote="We learned so much from hacking our own prototype, to be able to observe real people checking in with our system… on day 5."
							citeName="Hylke van Maaren"
                            citeTitle="Design Director - Hike One"
							citeImage="static/images/hylke.jpg"
                        />
                        <ReadMoreBlock
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
