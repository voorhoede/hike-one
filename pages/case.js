import React from 'react';

import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import ReadMore from '../components/read-more/read-more';
import CaseIntro from '../components/case-intro/case-intro';
import CaseTextCenter from '../components/case-text-center/case-text-center';
import FiftyFifty from '../components/50-50/50-50';
import QuoteBlock from '../components/quote-block/quote-block';
import FullWidthImage from '../components/full-width-image/full-width-image';
import LogoList from '../components/logo-list/logo-list';
import Contact from '../components/contact/contact';

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

						<CaseTextCenter
                            title="The ultimate nudge"
                            text="Two or three sentences about the approach that we take in most projects (work together!). It should show that by using this approach, we are able to deliver the right results every time. In the tumultuous business of cutting-in and attending to a whale, there is much running backwards and forwards among the crew. Now hands are wanted here, and then again hands are wanted there. " />

						<FiftyFifty className="fifty-fifty-content-left"
							title="Truly global"
							text="We created a real smart system, that could predict the most used presets in languages at certain times of the day. This helped passengers in quickly selecting a language."
							image="static/images/drop_fly1.jpg" />

                        <FiftyFifty className=""
							title="Customisable  to all clients"
							text="The system adjusts to the specific style of the airline the customer checks in with, to reassure and confirm."
							image="static/images/visuele-stijl-flexibel-2-x.jpg" />

                        <FullWidthImage image="static/images/team-copy-3-2.jpg" />

                        <QuoteBlock
                            color="purple"
                            quote="We learned so much from hacking our own prototype, to be able to observe real people checking in with our system… on day 5."
							citeName="Hylke van Maaren"
                            citeTitle="Design Director - Hike One"
							citeImage="static/images/hylke.jpg"
                        />

                        <FiftyFifty className=""
							title="Finishing under a minute"
							text="Our challenge was to let the passenger finish the drop-off in 60 seconds. And still let the customer feel comfortable during the process, that everything went well. "
							image="static/images/group-35.jpg" />

                        <FiftyFifty className="fifty-fifty-content-left"
							title="Got stuck?  Quickly solved"
							text="To keep the whole process super fast, even when people get stuck, airport staff can quickly access the system and help out."
							image="static/images/Bitmap.png" />

                        <FullWidthImage image="static/images/Team-Copy-4.jpg" />

                        <QuoteBlock
                            color="blue"
                            quote="We wanted to give our passengers a great user experience while checking in their luggage. It’s safe to say we managed to do so, thanks to Hike One."
							citeName="Reinout van der Meulen"
                            citeTitle="Senior Portfolio Manager Bag Drop at SITA"
							citeImage="static/images/reinout.jpg"
                        />

                        <CaseTextCenter
                            title="Collab with four"
                            text="We live in a world where we collaborate to establish the product. For Drop & Fly, we joined forces with Van Berlo for the physical product design and De Voorhoede for front-end development. " />

						<LogoList logos={logos} />

                        <FullWidthImage
                            image="static/images/airport.jpg"
                            title="60% faster check-in  at Seoul airport"
                            subtitle="(Incheon International, measured between March 1 and July 1, 2016)" />

                        <Contact 
                            title="Where will your journey  lead us?"
                            button="Get in touch" />

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
